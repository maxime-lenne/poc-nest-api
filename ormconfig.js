module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": ["src/**/**.entity{.ts,.js}"],
  "migrations": ["src/migrations/*{.js}"],
  "cli": {
      "migrationsDir": "src/migrations"
  }
}
