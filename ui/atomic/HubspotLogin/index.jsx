import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import A from '~/ui/atomic/A'
import Icon, { bgColor } from './icon.svg'

const StyledIcon = styled(Icon)`
  margin-right: 0.5em;
`

const Btn = styled(A)`
  display: inline-block;
  padding: 0.5em;
  border: 1px solid #bf5c43;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${bgColor};
    color: white;
    text-decoration: none;

    ${StyledIcon} path[fill='${bgColor}'] {
      fill: white;
    }
  }
`

const HubspotLogin = ({ href, ...rest }) => (
  <Btn href={href} {...rest}>
    <StyledIcon />
    Login
  </Btn>
)
HubspotLogin.propTypes = {
  href: PropTypes.string.isRequired
}
HubspotLogin.defaultProps = {
  href: '#'
}

export default HubspotLogin
