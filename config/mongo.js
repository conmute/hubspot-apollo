'use strict'

const mongoose = require('mongoose')
const env = require('./env')

const db = mongoose.connection

const connect = () => {
  return new Promise(resolve => {
    console.log('connecting to', env.MONGO_URL)
    mongoose.connect(env.MONGO_URL, { useNewUrlParser: true })
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', function () {
      console.log('...conected!')
      resolve(db)
    })
  })
}

module.exports = {
  db,
  connect
}
