FROM node:9

ENV NPM_CONFIG_LOGLEVEL warn


RUN mkdir /web
WORKDIR /web

COPY . .

RUN yarn install

EXPOSE 3000
