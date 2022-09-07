import Layout from '@/components/Layout/Layout'
import { NextPage } from 'next'

const Page500: NextPage = () => {
  return (
    <Layout>
      <div className="flex h-full content-center">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-9xl font-semibold text-secondary">500</h1>
          <p className="mb-12 text-lg">
            Internal Server Error - reload this page or{' '}
            <a className="text-primary hover:underline" href="/">
              go back
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Page500
