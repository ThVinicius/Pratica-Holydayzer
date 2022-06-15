import express from 'express'
import cors from 'cors'
import holidays from './data/index.js'
import isHoliday from './functions/isHoliday.js'
import holidaysOfTheMonth from './functions/holidaysOfTheMonth.js'

const server = express()

server.use(cors())

const today = new Date().toLocaleDateString()

server.get('/holidays', (_, res) => {
  res.send(holidays)
})

server.get('/holidays/:month', (req, res) => {
  const id = req.params.month
  res.send(holidaysOfTheMonth(holidays, id))
})

server.get('/is-today-holiday', (_, res) => {
  res.send(isHoliday(holidays, today))
})

server.listen(4000)
