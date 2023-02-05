## Description

NestJs Based Blogs Template with JWT as Auth and MongoDB as DB.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API End Points

[Postman API Documentation](https://galactic-flare-154229.postman.co/workspace/muzzo~3a14ea97-68f5-4423-ae08-23ec82d3474a/api/c559270d-df38-45da-ac1b-ff5f9a3ed536/documentation/23524009-fc96de2f-9781-4ffb-bea6-9ebaded35bb7)

```bash
# create blog POST method
/api/blog

# get all Blogs GET method
/api/blog

# get blog by id GET method
/api/blog/:id

# update blog PUT method
/api/blog/:id

# delete blog DELETE method
/api/blog/:id

# signup POST method
/auth/signup

# login POST method
/auth/login
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
