'use strict'

const mongoose = require('mongoose')

const dealSchema = new mongoose.Schema({
  refreshToken: String,
  accessToken: String,
  expiresIn: Number,
  id: String,
  name: String,
  stage: String,
  date: Date,
  amount: Number,
  type: String
})

module.expors = mongoose.model('Deal', dealSchema)
