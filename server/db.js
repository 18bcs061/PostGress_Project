const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "abhi500@#",
  host: "localhost",
  port: 5432,
  database: "employee",
});

module.exports = pool;
