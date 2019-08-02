import { gql } from 'apollo-boost'

export const dealsQuery = gql`
  query deals($jwtToken: String!) {
    deals(jwtToken: $jwtToken) {
      ...DealsFragment
    }
  }

  fragment DealsFragment on Deals {
    hasMore
    offset
    deals {
      ...DealFragment
    }
  }

  fragment DealFragment on Deal {
    id
    name
    stage
    closeDate
    amount
    type
    portalId
  }
`
