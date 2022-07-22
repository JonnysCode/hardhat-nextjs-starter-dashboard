
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'


export function Layout({children}) {

  return (
    <div className="">
      <Sidebar />

      <div className="md:pl-60 flex flex-col min-h-screen bg-white dark:bg-gray-800">
        <div className="m-3 flex-grow block rounded-2xl bg-gray-100 dark:bg-gray-900">
          <div className="">
            <Header />
          </div>

          <main className="flex flex-grow">
            <div className="py-6 mx-3 mb-3 w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
