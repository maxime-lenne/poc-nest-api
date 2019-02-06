workflow "New workflow" {
  on = "push"
  resolves = ["verify-production"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Build" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "run postinstall"
  env = {
    ENTITIES_PATH = "src/**/**.entity{.ts,.js}"
    MIGRATIONS_PATH = "src/migrations/*{.js,.ts}"
    MIGRATIONS_DIR = "src/migrations"
  }
}

action "Lint" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "run lint"
  env = {
    ENTITIES_PATH = "src/**/**.entity{.ts,.js}"
    MIGRATIONS_PATH = "src/migrations/*{.js,.ts}"
    MIGRATIONS_DIR = "src/migrations"
  }
}

action "Test" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "run test"
  env = {
    ENTITIES_PATH = "src/**/**.entity{.ts,.js}"
    MIGRATIONS_PATH = "src/migrations/*{.js,.ts}"
    MIGRATIONS_DIR = "src/migrations"
  }
}

action "Cov" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "run test:cov"
  env = {
    ENTITIES_PATH = "src/**/**.entity{.ts,.js}"
    MIGRATIONS_PATH = "src/migrations/*{.js,.ts}"
    MIGRATIONS_DIR = "src/migrations"
  }
}

# Filter for master branch
action "Master" {
  needs = ["Test", "Lint", "Cov"]
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Login" {
  needs = "Master"
  uses = "actions/heroku@master"
  args = "container:login"
  secrets = ["HEROKU_API_KEY"]
}

action "push-production" {
  uses = "actions/heroku@master"
  needs = "Login"
  args = ["container:push", "-a", "$HEROKU_APP", "web"]
  secrets = [
    "HEROKU_API_KEY",
    "DATABASE_URL",
    "ENTITIES_PATH",
    "MIGRATIONS_DIR",
    "MIGRATIONS_PATH",
    "NEWRELIC_LICENCE_KEY",
    "REDISCLOUD_URL"
  ]
  env = {
    HEROKU_APP = "poc-nest-api"
  }
}

action "release-production" {
  uses = "actions/heroku@master"
  needs = "push-production"
  args = ["container:release", "-a", "$HEROKU_APP", "web"]
  secrets = ["HEROKU_API_KEY"]
  env = {
    HEROKU_APP = "poc-nest-api"
  }
}

action "verify-production" {
  needs = ["release-production"]
  uses = "actions/heroku@master"
  args = ["apps:info", "$HEROKU_APP"]
  secrets = ["HEROKU_API_KEY"]
  env = {
    HEROKU_APP = "poc-nest-api"
  }
}
