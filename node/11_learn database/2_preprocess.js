const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'allen',
  user: 'root',
  password: 'allen1024.'
})

const statement = `
  SELECT * FROM users WHERE age > ? and height > ?;
`

connection.execute(statement, [16, 1.65], (err, results, field) => {
  console.log(results)
})