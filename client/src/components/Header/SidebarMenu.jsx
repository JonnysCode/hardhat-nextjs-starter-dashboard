import { useContext } from 'react'
import { MenuAlt2Icon } from '@heroicons/react/outline'

import SidebarContext from '@/context/SidebarContext'

export function SidebarMenu() {
  const { toggleSidebar } = useContext(SidebarContext)

  return (
    <div className="mx-3 my-2 flex items-center">
      <button
        type="button"
        className="h-full px-3 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-200 hover:dark:text-gray-100 md:hidden"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-7 w-7" aria-hidden="true" />
      </button>
    </div>
  )
}
