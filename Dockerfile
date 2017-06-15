FROM node:latest

ENV APP_DIR /app

COPY . $APP_DIR
WORKDIR $APP_DIR

RUN yarn --pure-lockfile
