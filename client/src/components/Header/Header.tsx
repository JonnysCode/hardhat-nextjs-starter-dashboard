import { ConnectButton } from '@rainbow-me/rainbowkit'

import { ThemeSelector } from '@/components/Header/ThemeSelector'
import { SidebarMenu } from '@/components/Header/SidebarMenu'

interface HeaderProps {
  title?: string
}

const Header = (props: HeaderProps) => {
  const { title = '' } = props

  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white dark:bg-zinc-800">
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

export default Header
