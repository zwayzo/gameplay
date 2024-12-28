FROM python:3.11-slim

ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app/server/CyberPong

COPY ./server/CyberPong /app/server/CyberPong

RUN pip install -r requirements.txt

RUN apt-get update && apt-get install -y postgresql-client

CMD ["sh", "/app/server/CyberPong/start.sh"]