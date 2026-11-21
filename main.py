import importlib.util
import os
import sys
from pathlib import Path

# Add backend directory to sys.path so its internal modules resolve
backend_dir = Path(__file__).resolve().parent / "ITR-System" / "backend"
if str(backend_dir) not in sys.path:
    sys.path.insert(0, str(backend_dir))

# Load backend main.py directly
backend_main_path = backend_dir / "main.py"
spec = importlib.util.spec_from_file_location("backend_app_module", backend_main_path)
backend_module = importlib.util.module_from_spec(spec)
sys.modules["backend_app_module"] = backend_module
spec.loader.exec_module(backend_module)

app = backend_module.app
