const express = require('express')
const path = require('path')
const app = express()

const conn_info = {
  host: process.env.DB_CONN,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
}

const { Pool } = require('pg')

const port = process.env.PORT ?? 3001

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/test', (req, res) => {
  pool = new Pool(conn_info)
  pool.query("select * from test", []).then((result) =>{
    res.status(200).send(JSON.stringify(result.rows))
  })
})

console.log(`Server starting on port ${port}`)
app.listen(port)
