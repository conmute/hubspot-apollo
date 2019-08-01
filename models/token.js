'use strict'

const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
  refreshToken: String,
  accessToken: String,
  expiresIn: Number
})

module.expors = mongoose.model('Token', tokenSchema)
