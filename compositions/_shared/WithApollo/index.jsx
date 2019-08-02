import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

export default ({ children }) => {
  const client = new ApolloClient({ uri: '/graphql' })
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
