import Layout from '@/components/Layout/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Dashboard Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow items-center justify-center py-10 px-20 text-center">
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

        <div className=" dropdown">
          <label tabIndex={0} className="btn m-1">
            Theme
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a data-set-theme="light">Light</a>
            </li>
            <li>
              <a data-set-theme="dark">Dark</a>
            </li>
            <li>
              <a data-set-theme="cupcake">Cupcake</a>
            </li>
            <li>
              <a data-set-theme="retro">Retro</a>
            </li>
            <li>
              <a data-set-theme="corporate">Corporate</a>
            </li>
            <li>
              <a data-set-theme="business">Business</a>
            </li>
          </ul>
        </div>

        <select data-choose-theme>
          <option value="">Default</option>
          <option value="dark">Dark</option>
          <option value="pink">Pink</option>
        </select>
      </main>
    </Layout>
  )
}

export default Home
