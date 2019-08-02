'use strict'

const { findToken } = require('../../../models/token')
const { verify } = require('../../../utils/guard/jwt')
const { NotAuthenticatedError } = require('../../../utils/errors')

module.exports = async ({ jwtToken }) => {
  const [valid, decoded] = verify(jwtToken)
  if (!valid) throw NotAuthenticatedError(decoded)
  const res = await findToken({
    hubId: decoded.hubId,
    appId: decoded.appId,
    userId: decoded.userId
  })
  return res
}
