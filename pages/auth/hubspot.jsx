/* global localStorage */

import React from 'react'
import Router from 'next/router'

class HubspotPage extends React.Component {
  componentDidMount () {
    const token = localStorage.getItem('__token__')
    if (token) {
      Router.push('/')
    }
  }

  render () {
    return <div>hubspot login</div>
  }
}

export default HubspotPage
