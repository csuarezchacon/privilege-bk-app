require('dotenv').config()
require('./database')

const express = require('express')
const morgan = require('morgan')
const app = express()
const { EXPRESS_PORT } = process.env

app.set('port', EXPRESS_PORT)

app.use(express.json())
app.use(morgan("dev"))

app.use('/api/publisher/', require('./routes/publisher.route'))

app.listen(app.get('port'), () => {
  console.log(`Express Server Started on port: ${app.get('port')}`)
})