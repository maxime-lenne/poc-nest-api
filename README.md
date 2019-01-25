<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Stack

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
[Fastify](https://www.fastify.io) Fastify
[TypeOrm](http://typeorm.io) TypeORM

## Installation

```bash
$ yarn install
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

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## How to create this poc :

```bash
$ nest new poc-frizbiz-api
# With yarn

$ yarn add fastify fastify-formbody
# change http provider for fastify
# https://docs.nestjs.com/techniques/performance

$ yarn add @nestjs/typeorm typeorm pg
# add typeorm and pg

```

need .env and ormconfig.json in root path
