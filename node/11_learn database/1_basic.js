const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'allen',
  user: 'root',
  password: 'allen1024.'
})

const statement = `
  SELECT * FROM users;
`

connection.query(statement, (err, results, fields) => {
  console.log(results)
})