'use strict'

const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
})

const PORT = process.env.PORT || 80

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'production',
  PORT,
  HUBSPOT_CLIENT_ID: process.env.HUBSPOT_CLIENT_ID,
  HUBSPOT_PORTAL_ID: process.env.HUBSPOT_PORTAL_ID,
  HUBSPOT_SCOPE: process.env.HUBSPOT_SCOPE,
  HUBSPOT_CLIENT_SECRET: process.env.HUBSPOT_CLIENT_SECRET,
  MONGO_URL: process.env.MONGO_URL
}
