
# Back-End NestJS

## Description

A simple back-end project with NestJs, Prisma, Postgres, Docker and JWT authentication.

## Installation

```bash
$ yarn install
```
# first time running app
```bash
# install dependeces
$ yarn install

# run docker compose
$ yarn docker:dev

# run prisma and start project
$ yarn start:prisma
```

## Running the app
```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Docs
```bash
# Swagger
$ http://localhost:3000/api

```

## .ENV
```bash
The env file must contain the variables

# DATABASE
$ DATABASE_URL = <url>

# JWT
$ CRYPTO_SECRET_KEY = <secret>
$ SECRET_KEY_JWT_TOKEN = <secret>
$ TOKEN_EXPIRES_IN = <time>

# NEW REALIC
$ APP_NAME_NEW_RELIC = <name>
$ LICENSE_KEY_NEW_RELIC = <key>

```

