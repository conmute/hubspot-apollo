import React from 'react'
import Login from '~/compositions/Login'
import IsAuthorized from '~/utils/guard/IsAuthorized'

export default () => (
  <IsAuthorized>
    {({ isIt }) => (isIt ? <div>logged in</div> : <Login />)}
  </IsAuthorized>
)
