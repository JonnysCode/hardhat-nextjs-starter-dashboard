import Layout from '@/components/Layout/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'

const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

const SectionHeader = ({ title }: any) => {
  return (
    <div className="mb-3 border-b border-base-content/10 pb-3">
      <h3 className="text-xl font-medium leading-6 text-base-content">
        {title}
      </h3>
    </div>
  )
}

const ThemePreview: NextPage = () => {
  return (
    <Layout title="Theme Preview">
      <Head>
        <title>Team Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-col py-3">
        <SectionHeader title="Colors" />
        <div className="grid grid-cols-1 gap-5 font-semibold sm:grid-cols-2 md:grid-cols-4">
          <div className="card h-48 gap-2 bg-base-100 p-2 shadow-xl">
            <div className="card flex-1 items-center justify-center bg-primary">
              <h3 className="text-center text-primary-content">primary</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-primary-focus">
              <h3 className="text-center text-primary-content">
                primary-focus
              </h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-primary-content">
              <h3 className="text-center text-primary">primary-content</h3>
            </div>
          </div>

          <div className="card h-48 gap-2 bg-base-100 p-2 shadow-xl">
            <div className="card flex-1 items-center justify-center bg-secondary">
              <h3 className="text-center text-secondary-content">secondary</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-secondary-focus">
              <h3 className="text-center text-secondary-content">
                secondary-focus
              </h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-secondary-content">
              <h3 className="text-center text-secondary">secondary-content</h3>
            </div>
          </div>

          <div className="card h-48 gap-2 bg-base-100 p-2 shadow-xl">
            <div className="card flex-1 items-center justify-center bg-accent">
              <h3 className="text-center text-accent-content">accent</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-accent-focus">
              <h3 className="text-center text-accent-content">accent-focus</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-accent-content">
              <h3 className="text-center text-accent">accent-content</h3>
            </div>
          </div>

          <div className="card h-48 gap-2 bg-base-100 p-2 shadow-xl">
            <div className="card flex-1 items-center justify-center bg-neutral">
              <h3 className="text-center text-neutral-content">neutral</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-neutral-focus">
              <h3 className="text-center text-neutral-content">
                neutral-focus
              </h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-neutral-content">
              <h3 className="text-center text-neutral">neutral-content</h3>
            </div>
          </div>

          <div className="card h-48 gap-2 bg-base-100 p-2 shadow-xl">
            <div className="card flex-1 items-center justify-center border border-base-300 bg-base-100">
              <h3 className="text-center text-base-content">base-100</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-base-200">
              <h3 className="text-center text-base-content">base-200</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-base-300">
              <h3 className="text-center text-base-content">base-300</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-base-content">
              <h3 className="text-center text-base-100">base-content</h3>
            </div>
          </div>

          <div className="card h-48 gap-2 bg-base-100 p-2 shadow-xl">
            <div className="card flex-1 items-center justify-center bg-info">
              <h3 className="text-center text-info-content">info</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-info-content">
              <h3 className="text-center text-info">info-content</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-success">
              <h3 className="text-center text-success-content">success</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-success-content">
              <h3 className="text-center text-success">success-content</h3>
            </div>
          </div>

          <div className="card h-48 gap-2 bg-base-100 p-2 shadow-xl">
            <div className="card flex-1 items-center justify-center bg-warning">
              <h3 className="text-center text-warning-content">warning</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-warning-content">
              <h3 className="text-center text-warning">warning-content</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-error">
              <h3 className="text-center text-error-content">error</h3>
            </div>
            <div className="card flex-1 items-center justify-center bg-error-content">
              <h3 className="text-center text-error">error-content</h3>
            </div>
          </div>

          <div className="card h-48 bg-base-100 shadow-xl"></div>
        </div>
      </main>
    </Layout>
  )
}

export default ThemePreview
