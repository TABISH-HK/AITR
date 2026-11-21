"""
Main FastAPI Application for AI-Based ITR Computation System.
Department of Computer Science, Aligarh Muslim University.
Author: Tabish Hasan (25CAMSA156)
"""
import os
import sys
from pathlib import Path

# Ensure backend directory is in sys.path for Vercel and module imports
_backend_dir = str(Path(__file__).resolve().parent)
if _backend_dir not in sys.path:
    sys.path.insert(0, _backend_dir)

from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from database import init_db
from routers import computation, extraction, history, reports, review, upload


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize SQLite database schema on startup
    init_db()
    yield


app = FastAPI(
    title="AI-Based ITR Computation System API",
    description="REST backend for Indian Income Tax Return (AY 2025-26) computation and report generation.",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS middleware for local Vite frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routers
app.include_router(upload.router)
app.include_router(extraction.router)
app.include_router(review.router)
app.include_router(computation.router)
app.include_router(reports.router)
app.include_router(history.router)


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "system": "AI-Based ITR Computation System",
        "assessment_year": "2026-27",
    }


# Serve built frontend static assets if available
FRONTEND_DIST = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "frontend", "dist"))

if os.path.exists(FRONTEND_DIST):
    app.mount("/assets", StaticFiles(directory=os.path.join(FRONTEND_DIST, "assets")), name="assets")

    @app.get("/{full_path:path}")
    def serve_frontend(full_path: str):
        if full_path.startswith("api/"):
            return None
        file_target = os.path.join(FRONTEND_DIST, full_path)
        if os.path.exists(file_target) and os.path.isfile(file_target):
            return FileResponse(file_target)
        return FileResponse(os.path.join(FRONTEND_DIST, "index.html"))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
