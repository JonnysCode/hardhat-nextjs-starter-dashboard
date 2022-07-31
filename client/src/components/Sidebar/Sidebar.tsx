import { Fragment, useRef, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import navigation, { bottomNavigation } from '@/routes/sidebar'
import SidebarContext from '@/context/SidebarContext'
import { Navigation } from '@/components/Sidebar/Navigation'
import { Logo } from '@/components/Sidebar/Logo'
import { BottomNavigation } from '@/components/Sidebar/BottomNavigation'
import SidebarFooter from './SidebarFooter'
import SidebarNavigation from './SidebarNavigation'

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
          className="drawer-overlay drawer-button z-10 backdrop-blur-md"
        ></label>
        <div className="menu z-0 w-72 p-3 pr-4 text-base-content">
          <div className="flex h-full flex-col rounded-3xl bg-base-300 shadow-xl">
            <Logo isMobile={false} />
            <SidebarNavigation
              navigation={navigation}
              linkClicked={linkClickedHandler}
              className="flex-grow"
            />
            <SidebarNavigation
              navigation={bottomNavigation}
              linkClicked={linkClickedHandler}
              className="mb-4"
            />
            <SidebarFooter />
          </div>
        </div>
      </div>
    </div>
  )
}
