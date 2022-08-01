import '@/styles/globals.css'

import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css'
import { ThemeProvider } from 'next-themes'
import { themeChange } from 'theme-change'

import Web3Wrapper from '@/components/Layout/Web3Wrapper'

function MyApp({ Component, pageProps }: AppProps) {
  // suppress useLayoutEffect warnings when running outside a browser
  if (!typeof window) React.useLayoutEffect = useEffect

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <ThemeProvider themes={['light', 'dark', 'cupcake']}>
      <Web3Wrapper>
        <Component {...pageProps} />
      </Web3Wrapper>
    </ThemeProvider>
  )
}

export default MyApp
