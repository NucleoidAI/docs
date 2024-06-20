FROM node:18

WORKDIR /app

COPY build build
COPY config.js config.mjs

EXPOSE 3000

ENTRYPOINT npx @nucleoidai/http-server start build
