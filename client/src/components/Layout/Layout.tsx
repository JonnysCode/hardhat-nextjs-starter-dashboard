import { Sidebar } from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'
import { SidebarProvider } from '@/context/SidebarContext'

interface Props {
  title?: string
  children?: any
  className?: string
}

const Layout = ({ title, children, className }: Props) => {
  return (
    <SidebarProvider>
      <div className={className}>
        <Sidebar>
          <div className="flex min-h-screen flex-col">
            <Header title={title} />

            <div className="mx-4 mb-4 block flex-grow rounded-2xl">
              {children}
            </div>
          </div>
        </Sidebar>
      </div>
    </SidebarProvider>
  )
}

export default Layout
