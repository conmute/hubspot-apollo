import React from 'react'
import styled from '@emotion/styled'

const A = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const LinkContext = React.createContext(A => ({ children, ...rest }) => (
  <A {...rest}>{children}</A>
))

export const LinkProvider = LinkContext.Provider

export default props => (
  <LinkContext.Consumer>
    {CompFactory => {
      const Comp = CompFactory(A)
      return <Comp {...props} />
    }}
  </LinkContext.Consumer>
)
