
const {drizzle} = require("drizzle-orm/node-postgres");

//postgres://<username>:<password>@<host>:<port>/<database>
const db = drizzle("postgres://postgres:admin@127.0.0.1:5432/mydb");


module.exports = db;