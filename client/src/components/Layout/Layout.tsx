import { Sidebar } from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'
import { SidebarProvider } from '@/context/SidebarContext'

export function Layout({ children }: any) {
  return (
    <SidebarProvider>
      <div className="">
        <Sidebar>
          <div className="flex min-h-screen flex-col">
            <Header />

            <div className="mx-4 mb-4 block flex-grow rounded-2xl">
              {children}
            </div>
          </div>
        </Sidebar>
      </div>
    </SidebarProvider>
  )
}
