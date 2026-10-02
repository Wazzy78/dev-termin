from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import or_

from database import Base, SessionLocal, engine
from models import Term

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Dev Termin API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://dev-termin.uz",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@app.get("/health")
def health():
    return {
        "status": "ok"
    }


@app.get("/terms")
def get_terms(
    search: str | None = None,
    category: str | None = None,
    db: Session = Depends(get_db),
):
    query = db.query(Term)

    if search:
        pattern = "%" + search.strip().replace("\\", "\\\\").replace("%", "\\%").replace("_", "\\_") + "%"
        query = query.filter(
            or_(
                Term.name.ilike(pattern, escape="\\"),
                Term.description.ilike(pattern, escape="\\"),
            )
        )

    if category:
        category_pattern = category.strip().replace("\\", "\\\\").replace("%", "\\%").replace("_", "\\_")
        query = query.filter(
            Term.category.ilike(category_pattern, escape="\\")
        )

    return query.order_by(Term.name).all()
