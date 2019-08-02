import React from 'react'
import { Query } from 'react-apollo'
import IsAuthorized from '~/utils/guard/IsAuthorized'
import WithApollo from '~/compositions/_shared/WithApollo'
import Table from '~/ui/organical/Table'
import { dealsQuery } from './query'

export default () => (
  <IsAuthorized>
    {({ isIt, token }) => {
      if (!isIt) return <div>Please log in</div>
      return (
        <WithApollo>
          <Query query={dealsQuery} variables={{ jwtToken: token }}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>
              if (error) return <div>Error :(</div>
              return <Table items={data.deals.deals} />
            }}
          </Query>
        </WithApollo>
      )
    }}
  </IsAuthorized>
)
