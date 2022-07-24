import '@/styles/globals.css'

import React from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  // suppress useLayoutEffect warnings when running outside a browser
  if (!typeof window) React.useLayoutEffect = React.useEffect

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
