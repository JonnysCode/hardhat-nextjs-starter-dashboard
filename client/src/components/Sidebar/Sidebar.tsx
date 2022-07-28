import { Fragment, useRef, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import SidebarContext from '@/context/SidebarContext'
import { Navigation } from '@/components/Sidebar/Navigation'
import { Logo } from '@/components/Sidebar/Logo'
import { BottomNavigation } from '@/components/Sidebar/BottomNavigation'
import Card from '@/components/Card'

export function Sidebar({ children }: any) {
  const sidebarRef = useRef(null)
  const { saveScroll } = useContext(SidebarContext)

  const linkClickedHandler = () => {
    saveScroll(sidebarRef.current)
  }

  return (
    <div className="drawer-mobile drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-center">
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay drawer-button backdrop-blur-md"
        ></label>
        <div className="menu w-72 p-3 pr-5 text-base-content">
          <div className="flex h-full flex-col rounded-3xl bg-base-300 shadow-xl">
            <Logo isMobile={false} />
            <Navigation isMobile={false} linkClicked={linkClickedHandler} />
            <BottomNavigation isMobile={false} />
          </div>
        </div>
      </div>
    </div>
  )
}
