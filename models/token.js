'use strict'

const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
  refreshToken: String,
  accessToken: String,
  expiresIn: Number,
  hubDomain: String,
  scopes: Array,
  hubId: Number,
  appId: String,
  userId: Number,
  email: String,
  tokenType: String,
  created: Date,
  updated: Date
})

module.exports = mongoose.model('Token', tokenSchema)
