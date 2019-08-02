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

const Token = mongoose.model('Token', tokenSchema)

const updateToken = props =>
  new Promise((resolve, reject) => {
    const { hubId, appId, userId } = props
    Token.findOneAndUpdate(
      { hubId, appId, userId },
      {
        ...props,
        updated: new Date()
      },
      (err, doc) => {
        if (err) {
          return reject(err)
        }
        resolve(doc)
      }
    )
  })

const addToken = props =>
  new Promise((resolve, reject) => {
    const token = new Token({ ...props, created: new Date() })
    token.save((err, savedModel) => {
      if (err) return reject(err)
      resolve(savedModel)
    })
  })

const findToken = props =>
  new Promise((resolve, reject) => {
    Token.findOne(props, (err, doc) => {
      if (err) {
        return reject(err)
      }
      resolve(doc)
    })
  })

module.exports = {
  Token,
  updateToken,
  addToken,
  findToken
}
