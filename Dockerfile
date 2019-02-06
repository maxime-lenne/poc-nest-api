# Build step
FROM node:alpine as build-stage
ENV DIRPATH /usr/src
ENV DIRNAME app
RUN mkdir -p $DIRPATH/$DIRNAME
WORKDIR $DIRPATH/$DIRNAME

# Install app dependencies
RUN apk update && apk upgrade && apk add git

ARG DATABASE_URL
ARG ENTITIES_PATH
ARG MIGRATIONS_DIR
ARG MIGRATIONS_PATH
ARG NEWRELIC_LICENCE_KEY
ARG REDISCLOUD_URL

# Detect whether you have a yarn.lock already and if so
# just install deps listed on lock file
COPY package.json .
COPY yarn.lock .
RUN yarn install --quiet
COPY . .
RUN yarn postinstall

# production step

# Expose env host
# This is needed to ensure communication between containers
# between docker containers
ENV HOST 0.0.0.0
EXPOSE 3000

# Run server app
CMD [ "yarn", "start:prod" ]
