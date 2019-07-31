import React from 'react'
import Icon, { bgColor } from './icon.svg'
import styled from '@emotion/styled'

const StyledIcon = styled(Icon)`
  margin-right: 0.5em;
`

const Btn = styled.a`
  display: inline-block;
  padding: 0.5em;
  border: 1px solid #bf5c43;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: ${bgColor};
    color: white;

    ${StyledIcon} path[fill='${bgColor}'] {
      fill: white;
    }
  }
`

const HubspotLogin = () => (
  <Btn>
    <StyledIcon />
    Login
  </Btn>
)

export default HubspotLogin
