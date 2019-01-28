module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    "dist/**/**.entity{.ts,.js}"],
  "migrations": [
    "dist/migrations/*{.js}"],
  "subscribers": [
    "dist/subscriber/**/*.js"],
  "cli": {
      "migrationsDir": "src/migrations"
  }
}
