const mysql = require('mysql')
const connection  = mysql.createConnection({
    host : 'sql6.freemysqlhosting.net',
    user : 'sql6421371',
    password:'RcxsMQxqvc',
    database:'sql6421371'
})


connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

module.exports = connection

