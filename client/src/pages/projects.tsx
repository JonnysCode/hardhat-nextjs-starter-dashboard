import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '@/components/Layout/Layout'

const Team: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Projects Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center py-5 px-20 text-center">
        <h1 className="text-6xl font-bold">Projects</h1>
      </main>
    </Layout>
  )
}

export default Team
