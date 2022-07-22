import {
  BellIcon,
} from '@heroicons/react/outline'

import { ThemeSelector } from '@/components/ThemeSelector'
import { ProfileMenu } from '@/components/ProfileMenu'
import { SidebarMenu } from '@/components/SidebarMenu'


function Notifications(props) {
    
    return (
        <button
            type="button"
            className="bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>);
}


export function Header() {

  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16">

      <SidebarMenu />

      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex items-center mx-4">
          <h1 className="text-2xl font-semibold dark:text-white text-black"></h1>
        </div>

        <div className="ml-4 flex items-center md:ml-6 relative justify-end gap-4 md:flex-grow">
          <ThemeSelector className="relative z-10" />
          
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}