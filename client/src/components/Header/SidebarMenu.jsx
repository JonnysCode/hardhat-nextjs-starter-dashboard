import { useContext } from 'react'
import { MenuAlt2Icon } from '@heroicons/react/outline'

import SidebarContext from '@/context/SidebarContext'

export function SidebarMenu() {
  const { toggleSidebar } = useContext(SidebarContext)

  return (
    <div className="mx-3 my-2 flex items-center">
      <button
        type="button"
        className="h-11 rounded-xl px-2 text-black hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:text-white hover:dark:text-primary-light md:hidden"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-7 w-7" aria-hidden="true" />
      </button>
    </div>
  )
}
