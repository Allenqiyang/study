const mysql = require('mysql2')

const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'allen',
  user: 'root',
  password: 'allen1024.',
  connectionLimit: 10
})

const statement = `
SELECT * FROM users WHERE age > ? and height > ?;
`

connections.execute(statement, [16, 1.65], (err, results, field) => {
  console.log(results)
})