'use strict'

const jwt = require('jsonwebtoken')
const env = require('../../config/env')

const verify = token => {
  try {
    return [true, jwt.verify(token, env.JWT_SECRET)]
  } catch (err) {
    return [false, err]
  }
}

module.exports = {
  verify
}
