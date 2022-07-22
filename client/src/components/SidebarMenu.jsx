import { useContext } from 'react';
import {
  MenuAlt2Icon,
} from '@heroicons/react/outline'

import SidebarContext from '@/context/SidebarContext';


export function SidebarMenu() {

  const { toggleSidebar } = useContext(SidebarContext)

  return (
    <div className="flex items-center">
      <button
        type="button"
        className="px-4 border-r border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    )
}
