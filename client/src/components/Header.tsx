import { BellIcon } from '@heroicons/react/outline'
import { ConnectButton } from '@rainbow-me/rainbowkit'

import { ThemeSelector } from '@/components/ThemeSelector'
import { ProfileMenu } from '@/components/ProfileMenu'
import { SidebarMenu } from '@/components/SidebarMenu'

function Notifications() {
  return (
    <button
      type="button"
      className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-900"
    >
      <span className="sr-only">View notifications</span>
      <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}

interface HeaderProps {
  title?: string
}

export function Header(props: HeaderProps) {
  const { title = '' } = props

  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 rounded-t-2xl">
      <SidebarMenu />

      <div className="flex flex-1 justify-between px-4">
        <div className="mx-4 flex flex-1 items-center">
          <h1 className="text-2xl font-semibold text-black dark:text-white">
            {title}
          </h1>
        </div>

        <div className="relative ml-4 flex items-center justify-end gap-4 md:ml-6 md:flex-grow">
          <ThemeSelector className="relative z-10" />
          <ConnectButton />
        </div>
      </div>
    </div>
  )
}
