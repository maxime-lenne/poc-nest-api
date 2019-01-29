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

need .env :
```
PORT=3000
DATABASE_URL=postgres://you_db_url
```

and ormconfig.json in root path :

```json
{
  "type": "postgres",
  "url": "you_db_url",
  "entities": ["src/**/**.entity{.ts,.js}"],
  "migrations": ["src/migrations/*{.ts,.js}"],
  "cli": {
      "migrationsDir": "src/migrations"
  }
}
```
without this file the typeorm client doesn't work.
install cli with : `npm install -g ts-node`

[Npm script added to support typeorm on typescript file](https://github.com/typeorm/typeorm/blob/master/docs/using-cli.md#notes-on-entity-files-written-in-typescript)
To generate a ts migration directly with entity change :
```bash
$ ts-node ./node_modules/typeorm/cli.js migration:generate -n CreateCategory
#Or with the npm script just type :
$ yarn typeorm migration:generate -n CreateCategory
```

To execute ts migration :
```bash
$ ts-node ./node_modules/typeorm/cli.js migration:run
#Or with the npm script just type :
$ yarn typeorm migration:run
#on heroku
$ heroku run typeorm migration:run -a poc-frizbiz-api
```

On heroku postinstall script is running

### seed
