import React from 'react'
import HubspotLogin from '~/ui/atomic/HubspotLogin'

export default () => (
  <HubspotLogin
    onClick={e => {
      e.preventDefault()
      window.location.href = '/auth/hubspot'
    }}
  />
)
