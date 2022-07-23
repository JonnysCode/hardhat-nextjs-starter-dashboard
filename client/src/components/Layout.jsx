import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'

export function Layout({ children }) {
  return (
    <div className="">
      <Sidebar />

      <div className="flex min-h-screen flex-col bg-white dark:bg-gray-800 md:pl-60">
        <div className="m-3 block flex-grow rounded-2xl bg-gray-100 dark:bg-gray-900">
          {children}
        </div>
      </div>
    </div>
  )
}
