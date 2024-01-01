const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "shlok",
  host: "localhost",
  port: 5432,
  database: "siman"
});

module.exports = pool;
