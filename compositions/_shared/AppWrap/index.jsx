import React from 'react'
import Link from 'next/link'
import { LinkProvider } from '~/ui/generic'

export default ({ children }) => (
  <LinkProvider
    value={A => ({ children, href, as, ...rest }) => (
      <Link {...{ href, as }}>
        <A {...rest}>{children}</A>
      </Link>
    )}
  >
    Wrapp
    <div>{children}</div>
  </LinkProvider>
)
