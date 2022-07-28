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

      <main className="flex w-full flex-col py-3">
        <h1 className="text-6xl font-bold">Team</h1>
        <ul role="list" className="mt-5 w-full space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="h-64 w-full overflow-hidden rounded-2xl bg-base-300 shadow-xl"
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
