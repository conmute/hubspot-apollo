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

const readStorage = () => JSON.parse(localStorage.getItem('__token__')) || null

const check = () => !!readStorage()

const IsAuthorized = ({ children }) => {
  const [isIt, setAuthorized] = useState(false)
  const [token, setToken] = useState(null)
  useEffect(() => {
    setAuthorized(check())
    setToken(readStorage())
    Router.events.on('routeChangeComplete', () => {
      setAuthorized(check())
      setToken(readStorage())
    })
  })
  return (
    <>
      {children({
        isIt,
        logout: () => {
          logout()
          setToken(null)
          setAuthorized(false)
        },
        login,
        token
      })}
    </>
  )
}
IsAuthorized.propTypes = {
  children: PropTypes.func
}

export default IsAuthorized
