import Layout from '@/components/Layout/Layout'

function Page404() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
          404
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Page not found. Check the address or{' '}
          <a
            className="text-primary-600 dark:text-primary-300 hover:underline"
            href="/"
          >
            go back
          </a>
          .
        </p>
      </div>
    </Layout>
  )
}

export default Page404
