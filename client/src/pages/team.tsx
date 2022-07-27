import { Layout } from '@/components/Layout/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'

const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

const Team: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Team Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center py-5 px-20 text-center">
        <h1 className="text-6xl font-bold">Team</h1>
        <ul role="list" className="mt-5 space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="h-64 w-96 overflow-hidden rounded-2xl bg-white/75 px-4 py-4 shadow-xl sm:px-6"
            >
              {/* Your content */}
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}

export default Team
