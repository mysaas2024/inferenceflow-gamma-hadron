FROM python:3.12-slim

WORKDIR /app

COPY pyproject.toml ./
COPY src ./src

RUN python -m pip install --upgrade pip && pip install -e .

EXPOSE 8000

CMD ["python", "-m", "uvicorn", "python_backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
