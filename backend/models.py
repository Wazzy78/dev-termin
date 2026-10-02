from sqlalchemy import Column, Integer, String, Text

from database import Base


class Term(Base):
    __tablename__ = "terms"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(
        String(100),
        unique=True,
        nullable=False,
        index=True,
    )

    description = Column(
        Text,
        nullable=False,
    )

    category = Column(
        String(50),
        nullable=False,
        index=True,
    )
