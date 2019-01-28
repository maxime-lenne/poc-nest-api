module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": ["dist/**/**.entity.js"],
  "migrations": ["dist/migrations/*.js"],
  "cli": {
      "migrationsDir": "dist/migrations"
  }
}
