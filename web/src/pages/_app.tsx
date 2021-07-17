import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer } from '@components'
import Styles from './styles.module.scss'

import '../styles/globals.scss'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from 'src/lib'

export const Welcome: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <div className={Styles.container}>
        <Head>
          <title>Welcome to the ocean</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />

        <Footer />
      </div>
    </ApolloProvider>
  )
}

export default Welcome
