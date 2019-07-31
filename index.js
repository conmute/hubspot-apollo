'use strict'

require('dotenv').config()

const express = require('express')
const next = require('next')
const routes = require('./routes')

process.on('uncaughtException', function (err) {
  console.error('Uncaught Exception: ', err)
})

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection: Promise:', p, 'Reason:', reason)
})

process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.PORT = process.env.PORT || 80

const nextApp = next({
  dir: '.',
  dev: process.env.NODE_ENV === 'development'
})
const nextRequestHandler = routes.getRequestHandler(nextApp)

nextApp
  .prepare()
  .then(() => {
    const server = express()
    server.all('*', (req, res) => {
      return nextRequestHandler(req, res)
    })
    server.listen(process.env.PORT, err => {
      if (err) {
        throw err
      }
      console.log(
        `> Ready on http://localhost:${process.env.PORT} [${
          process.env.NODE_ENV
        }]`
      )
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })
