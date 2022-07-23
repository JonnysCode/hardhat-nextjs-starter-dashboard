import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'

const Team: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Calendar Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title={'Calendar'} />

      <main className="flex w-full flex-1 flex-col items-center justify-center py-5 px-20 text-center">
        <h1 className="text-6xl font-bold">Calendar</h1>
      </main>
    </Layout>
  )
}

export default Team
