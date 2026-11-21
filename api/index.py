"""
Vercel Serverless Function entrypoint.
"""
import os
import sys
from pathlib import Path

# Add backend directory to sys.path
_backend_dir = str(Path(__file__).resolve().parent.parent / "backend")
if _backend_dir not in sys.path:
    sys.path.insert(0, _backend_dir)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import init_db
from routers import computation, extraction, history, reports, review, upload

init_db()

app = FastAPI(
    title="AI-Based ITR Computation System API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload.router)
app.include_router(extraction.router)
app.include_router(review.router)
app.include_router(computation.router)
app.include_router(reports.router)
app.include_router(history.router)


@app.get("/api/health")
def health_check():
    return {"status": "healthy", "assessment_year": "2026-27"}
