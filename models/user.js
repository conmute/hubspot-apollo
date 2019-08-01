'use strict'

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  refreshToken: String,
  accessToken: String,
  expiresIn: Number
})

module.expors = mongoose.model('User', userSchema)
