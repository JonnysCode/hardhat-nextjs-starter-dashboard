import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="antialiased [font-feature-settings:'ss01']" lang="en">
      <Head>{}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
