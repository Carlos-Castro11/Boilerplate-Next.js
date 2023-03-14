import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado</title>
        <link
          rel="shortcut icon"
          href="/icons/reactIconSmall.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/reactIconSmall.png"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter with Ts, ReactJs, NextJs and StyledComponents"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
