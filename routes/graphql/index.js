const expressGraphQL = require('express-graphql')
const schema = require('./schema')
const resolvers = require('./resolvers')

module.exports = server => {
  server.use(
    '/graphql',
    expressGraphQL({
      schema,
      rootValue: resolvers,
      graphiql: true
    })
  )
}
