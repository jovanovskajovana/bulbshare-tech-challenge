/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.json())

app.listen(4000, function (err) {
  if (err) return err
  console.log('(HTTP) App now running on port', 4000)
})

app.get('/feed', (req, res) => {
  const rawData = fs.readFileSync(path.resolve(__dirname, 'data/feed.json'))
  const data = JSON.parse(rawData.toString())

  const { page, limit } = req.query

  const startIndex = page * limit - limit
  const endIndex = page * limit

  const slicedArray = data.slice(startIndex, endIndex)

  res.setHeader('Content-Type', 'application/json')
  res.send(slicedArray)
})

app.get('/comments/:briefref', (req, res) => {
  const rawdata = fs.readFileSync(path.resolve(__dirname, 'data/comments.json'))
  const data = JSON.parse(rawdata.toString())

  const id = req.params.briefref
  const foundDoc = data.filter((document) => document.briefref == id)

  res.setHeader('Content-Type', 'application/json')
  res.send(foundDoc)
})
