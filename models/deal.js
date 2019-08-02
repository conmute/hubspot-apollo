'use strict'

const mongoose = require('mongoose')
const request = require('request-promise')

const dealSchema = new mongoose.Schema({
  id: String,
  name: String,
  stage: String,
  closeDate: Date,
  amount: Number,
  type: String,
  portalId: Number
})

const Deal = mongoose.model('Deal', dealSchema)

const dealReducer = deal => {
  return {
    portalId: deal.portalId,
    id: deal.dealId,
    name: deal.properties.dealname ? deal.properties.dealname.value : null,
    stage: deal.properties.dealstage ? deal.properties.dealstage.value : null,
    closeDate: deal.properties.closedate
      ? new Date(deal.properties.closedate.timestamp)
      : null,
    amount: deal.properties.amount ? deal.properties.amount.value : null,
    type: deal.properties.dealtype ? deal.properties.dealtype.value : null
  }
}

const getDeals = ({ token, offset = 0, count = 5, limit = 100 }) => {
  const properties = [
    'dealname',
    'dealstage',
    'amount',
    'closedate',
    'dealtype'
  ]
    .map(x => `properties=${x}`)
    .join('&')
  const args = `${properties}&offset=${offset}&count=${count}&limit=${limit}`
  const finalUrl = `https://api.hubapi.com/deals/v1/deal/paged?${args}`
  return request({
    uri: finalUrl,
    json: true,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(data => {
    return {
      deals: data.deals.map(x => dealReducer(x)),
      hasMore: data.hasMore,
      offset: data.offset
    }
  })
}

module.exports = {
  Deal,
  getDeals
}
