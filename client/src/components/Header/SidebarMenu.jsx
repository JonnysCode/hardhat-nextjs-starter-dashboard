import { useContext } from 'react'
import { MenuAlt2Icon } from '@heroicons/react/outline'

import SidebarContext from '@/context/SidebarContext'

export function SidebarMenu() {
  const { toggleSidebar } = useContext(SidebarContext)

  return (
    <div className="mx-3 my-2 flex items-center">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost btn-square drawer-button lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-8 w-8" aria-hidden="true" />
      </label>
    </div>
  )
}
