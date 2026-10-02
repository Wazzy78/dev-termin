# Dev Termin

An Uzbek IT dictionary built with Next.js, FastAPI, PostgreSQL, SQLAlchemy, and psycopg v3.

## Backend

Install and run with the same Python environment. The existing `backend/venv` is a Windows environment and cannot run under WSL.

From the project root in PowerShell:

```powershell
& .\backend\venv\Scripts\python.exe -m pip install -r backend/requirements.txt
& .\backend\venv\Scripts\python.exe -m uvicorn main:app --app-dir backend --reload --host 0.0.0.0 --port 8000
```

For a fresh Linux/WSL environment:

```bash
python3 -m venv backend/.venv
backend/.venv/bin/python -m pip install -r backend/requirements.txt
backend/.venv/bin/python -m uvicorn main:app --app-dir backend --reload --port 8000
```

If `backend/.env` is missing, copy `backend/.env.example` and fill in actual credentials:

```dotenv
DATABASE_URL=postgresql+psycopg://USERNAME:PASSWORD@HOST:5432/DATABASE_NAME
```

Encode special characters in URL credentials. The backend loads this file relative to `database.py`, regardless of the working directory. Environment variables take precedence. Credentials and virtual environments are ignored by Git and excluded from Docker builds.

PostgreSQL must be running and the database must exist. Startup creates the `terms` table if needed; it does not seed terms. A timeout at `localhost:5432` means PostgreSQL is unavailable from the environment running Python. Windows and WSL can have different localhost addresses.

Verify the API:

```bash
curl http://localhost:8000/health
curl 'http://localhost:8000/terms?search=Docker&category=DevOps'
```

`GET /terms` returns `id`, `name`, `description`, and `category`, sorted by name. Search matches names and descriptions without case sensitivity; categories match the full category name without case sensitivity, for example `DevOps`. An empty table returns `[]`.

## Frontend

Copy `frontend/.env.example` to `frontend/.env.local` if missing:

```dotenv
BACKEND_URL=http://127.0.0.1:8000
```

This address must be reachable from the Next.js server, including across Windows/WSL environments. In Docker use the backend service hostname instead of localhost.

From the project root:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Root scripts target `frontend/`. Search and category changes request `/api/terms`, which forwards to FastAPI. Existing Uzbek translations come from `frontend/data/terms.ts`; new API terms display their descriptions without a translation until one is added. Translation searches include matching database records through the proxy.

When the API is unavailable, the page shows a notice and keeps the original local dictionary available under “Barchasi”. A successful empty API response shows the empty result state. Local terms have no category metadata.

```bash
npm run lint
npm run build
npm start
```

## Docker

The Dockerfile builds the frontend standalone server. Run FastAPI and PostgreSQL separately.

```bash
docker build -t dev-termin .
docker run --rm -p 3000:3000 -e BACKEND_URL=http://BACKEND_HOST:8000 dev-termin
```

Set `BACKEND_URL` at runtime so the same image works in different environments. Docker must be able to resolve and reach `BACKEND_HOST`.
