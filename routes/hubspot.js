'use strict'

const request = require('request')
const env = require('../config/env')
const url = require('url')

const URL = endpoint => `http://localhost:${env.PORT}/auth/hubspot/${endpoint}`

module.exports = server => {
  server.get('/auth/hubspot', (_, res) => {
    const authUrl = url.format({
      pathname: 'https://app.hubspot.com/oauth/authorize',
      query: {
        client_id: env.HUBSPOT_CLIENT_ID,
        scope: env.HUBSPOT_SCOPE,
        redirect_uri: URL('callback')
      }
    })
    return res.redirect(authUrl)
  })
  server.all('/auth/hubspot/callback', (req, res) => {
    const hasError = req.query && req.query.error
    if (hasError) {
      return res.redirect('/auth/hubspot/failure')
    }

    const formData = {
      grant_type: 'authorization_code',
      client_id: env.HUBSPOT_CLIENT_ID,
      client_secret: env.HUBSPOT_CLIENT_SECRET,
      redirect_uri: URL('callback'),
      code: req.query.code
    }

    request.post(
      'https://api.hubapi.com/oauth/v1/token',
      { form: formData },
      (err, data) => {
        // Handle the returned tokens
        if (err) {
          return res.redirect('/auth/hubspot/failure')
        }
        console.log(data)
        return res.redirect('/auth/hubspot/success')
      }
    )
  })
  server.all('/auth/hubspot/success', (req, res) => {
    res.send(req.params)
  })
  server.all('/auth/hubspot/failure', (req, res) => {
    res.send(req.params)
  })
}
