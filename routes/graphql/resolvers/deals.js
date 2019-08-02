'use strict'

const { verify } = require('../../../utils/guard/jwt')
const { NotAuthenticatedError } = require('../../../utils/errors')
const { getDeals } = require('../../../models/deal')

module.exports = async ({ jwtToken }) => {
  const [valid, decoded] = verify(jwtToken)
  if (!valid) throw NotAuthenticatedError(decoded)
  return getDeals({ token: decoded.token })
}
