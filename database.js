const mysql = require('mysql')
const connection  = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USERNAME,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_NAME
})


connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

module.exports = connection

