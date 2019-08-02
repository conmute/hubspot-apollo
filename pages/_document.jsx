import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const addonProps = {
      token: ctx.query.token || null
    }
    return { ...initialProps, ...addonProps }
  }

  render () {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          {this.props.token ? (
            <script
              dangerouslySetInnerHTML={{
                __html: `
              localStorage.setItem(
                '__token__',
                JSON.stringify(${JSON.stringify(this.props.token)})
              )
            `
              }}
            />
          ) : null}
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
