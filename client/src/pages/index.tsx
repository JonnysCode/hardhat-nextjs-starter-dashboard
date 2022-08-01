import Layout from '@/components/Layout/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Dashboard Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="[data-theme=cupcake]:text-accent flex-grow items-center justify-center py-10 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-secondary" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-base-200 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>
      </main>
    </Layout>
  )
}

export default Home
