import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { LinkProvider } from '~/ui/generic'
import Menu from '~/ui/molecular/Menu'
import IsAuthorized from '~/utils/guard/IsAuthorized'

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1em;
  margin: 1em;
`

const NextLinkFactory = A => ({ children, href, as, ...rest }) => (
  <Link {...{ href, as }}>
    <A {...rest}>{children}</A>
  </Link>
)

export default ({ children }) => (
  <LinkProvider value={NextLinkFactory}>
    <IsAuthorized>
      {({ isIt, logout }) => {
        const common = [
          { label: 'Home', href: '/' },
          { label: 'Terms', href: '/terms' }
        ]
        const forAuthorized = [
          { label: 'See deals', href: '/deals' },
          { label: 'Logout', href: '', onClick: logout }
        ]
        return <Menu links={[...common, ...(isIt ? forAuthorized : [])]} />
      }}
    </IsAuthorized>
    <Wrapper>{children}</Wrapper>
  </LinkProvider>
)
