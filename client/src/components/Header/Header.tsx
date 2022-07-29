import { ConnectButton } from '@rainbow-me/rainbowkit'

import { ThemeSelector } from '@/components/Header/ThemeSelector'
import { SidebarMenu } from '@/components/Header/SidebarMenu'

interface HeaderProps {
  title?: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="navbar sticky top-0 bg-base-100 bg-opacity-30 backdrop-blur-md">
      <div className="">
        <SidebarMenu />
        <h1 className="mt-2 text-3xl font-bold">{title}</h1>
      </div>

      <div className="absolute right-0 flex items-center justify-end gap-4 px-3 md:flex-grow">
        <ThemeSelector className="relative z-10" />
        <ConnectButton />
      </div>
    </div>
  )
}

export default Header
