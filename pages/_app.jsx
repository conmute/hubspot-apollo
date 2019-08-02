import React from 'react'
import App, { Container } from 'next/app'
import AppWrap from '~/compositions/_shared/AppWrap'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx, res }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <AppWrap>
          <Component {...pageProps} />
        </AppWrap>
      </Container>
    )
  }
}

export default MyApp
