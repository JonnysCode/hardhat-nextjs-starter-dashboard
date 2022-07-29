import { ConnectButton } from '@rainbow-me/rainbowkit'

import { ThemeSelector } from '@/components/Header/ThemeSelector'
import { SidebarMenu } from '@/components/Header/SidebarMenu'

interface HeaderProps {
  title?: string
}

const Header = ({ title }: HeaderProps) => {

  return (
    <div className="navbar sticky top-0 z-10 h-16 w-full bg-base-100 bg-opacity-30 backdrop-blur-md">
      <SidebarMenu />

      <div className="flex flex-1 justify-between">
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

export default Header
