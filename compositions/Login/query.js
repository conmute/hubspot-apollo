import { gql } from 'apollo-boost'

const tokenFragment = gql`
  fragment TokenFragment on Token {
    hubDomain
    scopes
    hubId
    appId
    userId
    email
    tokenType
    created
    updated
  }
`
export const tokenQuery = gql`
  query token($jwtToken: String!) {
    token(jwtToken: $jwtToken) {
      ...TokenFragment
    }
  }
  ${tokenFragment}
`
