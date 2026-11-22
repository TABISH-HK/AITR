"""Application settings loaded from .env"""
import os
import tempfile
from pydantic_settings import BaseSettings, SettingsConfigDict


def get_default_db_url() -> str:
    # If running in Vercel or serverless environment, use /tmp which is writable
    if os.environ.get("VERCEL"):
        db_path = os.path.join(tempfile.gettempdir(), "itr_system.db")
        return f"sqlite:///{db_path}"
    return "sqlite:///./itr_system.db"


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    NVIDIA_API_KEY: str = ""
    NVIDIA_MODEL: str = "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning"
    MAX_UPLOAD_SIZE_MB: int = 10
    FILE_RETENTION_HOURS: int = 24
    DATABASE_URL: str = get_default_db_url()


settings = Settings()
