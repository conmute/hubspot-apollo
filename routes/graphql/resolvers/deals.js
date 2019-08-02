'use strict'

const { verify } = require('../../../utils/guard/jwt')
const { NotAuthenticatedError } = require('../../../utils/errors')
const { getDeals, addDeal, updateDeal } = require('../../../models/deal')

const persistDeals = deals => {
  deals.map(x => {
    updateDeal(x).then(doc => {
      if (!doc) addDeal(x)
    })
  })
}

module.exports = async ({ jwtToken }) => {
  const [valid, decoded] = verify(jwtToken)
  if (!valid) throw NotAuthenticatedError(decoded)
  const re = await getDeals({ token: decoded.token })
  persistDeals(re.deals)
  return re
}
