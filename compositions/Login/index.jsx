import React from 'react'
import { Query } from 'react-apollo'
import HubspotLogin from '~/ui/atomic/HubspotLogin'
import IsAuthorized from '~/utils/guard/IsAuthorized'
import WithApollo from '~/compositions/_shared/WithApollo'
import { tokenQuery } from './query'

export default () => (
  <IsAuthorized>
    {({ isIt, token }) =>
      isIt ? (
        <WithApollo>
          <Query query={tokenQuery} variables={{ jwtToken: token }}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>
              if (error) return <div>Error :(</div>
              return <pre>{JSON.stringify(data, null, 2)}</pre>
            }}
          </Query>
        </WithApollo>
      ) : (
        <HubspotLogin
          onClick={e => {
            e.preventDefault()
            window.location.href = '/auth/hubspot'
          }}
        />
      )
    }
  </IsAuthorized>
)
