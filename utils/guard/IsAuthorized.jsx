/* global localStorage */

import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'

const logout = () => {
  localStorage.removeItem('__token__')
  setTimeout(() => Router.push('/'))
}

const login = () => {
  Router.push('/auth/hubspot')
}

const check = () => !!JSON.parse(localStorage.getItem('__token__'))

const IsAuthorized = ({ children }) => {
  const [isIt, setAuthorized] = useState(false)
  useEffect(() => {
    setAuthorized(check())
    Router.events.on('routeChangeComplete', () => {
      setAuthorized(check())
    })
  })
  return (
    <>
      {children({
        isIt,
        logout: () => {
          logout()
          setAuthorized(false)
        },
        login
      })}
    </>
  )
}
IsAuthorized.propTypes = {
  children: PropTypes.func
}

export default IsAuthorized
