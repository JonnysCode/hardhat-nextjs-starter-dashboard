import { Sidebar } from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'
import { SidebarProvider } from '@/context/SidebarContext'

export function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="">
        <Sidebar />

        <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-zinc-800 md:pl-64">
          <Header />

          <div className="mx-4 mb-4 block flex-grow rounded-2xl">
            {children}
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
