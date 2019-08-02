'use strict'

const express = require('express')
const next = require('next')
const nextRoutes = require('next-routes')()
const env = require('./config/env')
const mongo = require('./config/mongo')
const routes = require('./routes')

process.on('uncaughtException', function (err) {
  console.error('Uncaught Exception: ', err)
})

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection: Promise:', p, 'Reason:', reason)
})

const nextApp = next({
  dir: '.',
  dev: env.NODE_ENV === 'development'
})
const nextRequestHandler = nextRoutes.getRequestHandler(nextApp)

const setupExpress = () => {
  const server = express()
  routes.graphql(server)
  routes.hubspot(server, { nextApp })
  routes.next(server, { nextRequestHandler })
  server.listen(env.PORT, err => {
    if (err) {
      throw err
    }
    console.log(`> Ready on http://localhost:${env.PORT} [${env.NODE_ENV}]`)
  })
}

nextApp
  .prepare()
  .then(mongo.connect)
  .then(setupExpress)
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })
