import { ConnectButton } from '@rainbow-me/rainbowkit'

import SidebarToggle from '@/components/Header/SidebarToggle'
import dynamic from 'next/dynamic'

const ThemeSelector = dynamic(
  () => import('@/components/Header/ThemeSelector'),
  {
    ssr: false,
  }
)

interface HeaderProps {
  title?: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-200 bg-opacity-30 p-4 backdrop-blur-md">
      <div className="flex flex-grow justify-between gap-3">
        <div className="flex flex-row gap-3">
          <div className="flex lg:hidden">
            <SidebarToggle />
          </div>
          <div className="flex flex-auto items-center">
            <h1 className="text-md align-middle font-bold leading-none text-primary sm:text-2xl">
              {title}
            </h1>
          </div>
        </div>

        <div className="flex flex-auto items-center justify-end gap-3">
          <ThemeSelector className="pt-1" />
          <ConnectButton />
        </div>
      </div>
    </div>
  )
}

export default Header
