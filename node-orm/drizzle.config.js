const { defineConfig } = require("drizzle-kit");

const config = defineConfig({
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./drizzle/schema.js",

  dbCredentials: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "admin",
    database: "mydb",
    ssl: false, // 👈 this works properly when not using url
  },
});

module.exports = config;
