import '@/styles/globals.css'

import React from 'react'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css'
import { ThemeProvider } from 'next-themes'

import Web3Wrapper from '@/components/Layout/Web3Wrapper'

function MyApp({ Component, pageProps }: AppProps) {
  // suppress useLayoutEffect warnings when running outside a browser
  if (!typeof window) React.useLayoutEffect = React.useEffect

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Web3Wrapper>
        <Component {...pageProps} />
      </Web3Wrapper>
    </ThemeProvider>
  )
}

export default MyApp
