import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Team: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-2">
        <Head>
          <title>Team Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header></Header>

        
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold">
            Team
          </h1>
        </main>

      </div>
    </Layout>
  )
}

export default Team
