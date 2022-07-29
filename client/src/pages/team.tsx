import Layout from '@/components/Layout/Layout'
import PageTitle from '@/components/PageTitle'
import type { NextPage } from 'next'
import Head from 'next/head'

const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

const Team: NextPage = () => {
  return (
    <Layout title="Team">
      <Head>
        <title>Team Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-col pb-3">
        <ul role="list" className="w-full space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="h-64 w-full overflow-hidden rounded-3xl bg-base-300 shadow-xl"
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
