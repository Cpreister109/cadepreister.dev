FROM python:3.11-slim

WORKDIR /app
COPY . /app

RUN pip install -r requirements.txt

CMD ["gunicorn", "-b", "0.0.0.0:5000", "routes:app"]