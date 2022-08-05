import Layout from '@/components/Layout/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'

const Team: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Documents Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center py-5 px-20 text-center">
        <h1 className="text-6xl font-bold">Documents</h1>
      </main>
    </Layout>
  )
}

export default Team
