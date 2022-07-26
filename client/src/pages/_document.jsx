import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="antialiased [font-feature-settings:'ss01']" lang="en">
      <Head>{}</Head>
      <body className="bg-white dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
