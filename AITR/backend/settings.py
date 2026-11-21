"""Application settings loaded from .env"""
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    NVIDIA_API_KEY: str = ""
    NVIDIA_MODEL: str = "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning"
    MAX_UPLOAD_SIZE_MB: int = 10
    FILE_RETENTION_HOURS: int = 24
    DATABASE_URL: str = "sqlite:///./itr_system.db"


settings = Settings()
