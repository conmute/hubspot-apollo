'use strict'

const request = require('request-promise')
const url = require('url')
const jwt = require('jsonwebtoken')
const env = require('../config/env')
const { updateToken, addToken } = require('../models/token')

const URL = endpoint => `http://localhost:${env.PORT}/auth/hubspot/${endpoint}`

const tokenReducer = ({ token, data }) => {
  return {
    refreshToken: token.refresh_token,
    accessToken: token.access_token,
    expiresIn: token.expires_in,
    hubDomain: data.hub_domain,
    scopes: data.scopes,
    hubId: data.hub_id,
    appId: data.app_id,
    userId: data.user_id,
    email: data.user,
    tokenType: data.token_type
  }
}

module.exports = (server, { nextApp }) => {
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

    request({
      method: 'POST',
      uri: 'https://api.hubapi.com/oauth/v1/token',
      form: formData,
      json: true
    })
      .then(token =>
        request({
          uri: `https://api.hubapi.com/oauth/v1/access-tokens/${
            token.access_token
          }`,
          json: true
        }).then(data => tokenReducer({ token, data }))
      )
      .then(props =>
        updateToken(props).then(doc => {
          if (!doc) return addToken(props).then(_ => props)
          return props
        })
      )
      .then(data => {
        const token = jwt.sign(
          {
            userId: data.userId,
            appId: data.appId,
            hubId: data.hubId,
            token: data.accessToken
          },
          env.JWT_SECRET,
          { expiresIn: data.expiresIn }
        )
        nextApp.render(req, res, '/auth/hubspot', { token })
      })
      .catch(err => {
        console.error(err)
        res.redirect('/auth/hubspot/failure')
      })
  })

  server.all('/auth/hubspot/success', (req, res) => {
    res.send(req.params)
  })

  server.all('/auth/hubspot/failure', (req, res) => {
    res.send(req.params)
  })
}
