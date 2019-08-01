import React from 'react'
import styled from '@emotion/styled'
import AppWrap from '~/compositions/_shared/AppWrap'
import HubspotLogin from '~/ui/atomic/HubspotLogin'

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1em;
  margin: 1em;
`

export default () => (
  <AppWrap>
    <Wrapper>
      <HubspotLogin href='/auth/hubspot' />
    </Wrapper>
  </AppWrap>
)
