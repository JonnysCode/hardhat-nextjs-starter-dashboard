import Layout from '@/components/Layout/Layout'

function Page404() {
  return (
    <Layout>
      <div className="flex h-full content-center">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-9xl font-semibold text-secondary">404</h1>
          <p className="mb-8 text-lg">
            Page not found. Check the address or{' '}
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

export default Page404
