FROM python:3.9-slim-buster

WORKDIR /usr/src/app

COPY requirements.txt .
RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install -r requirements.txt
COPY . .
