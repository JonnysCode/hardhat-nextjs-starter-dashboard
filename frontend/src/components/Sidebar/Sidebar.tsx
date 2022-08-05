import { Fragment, useRef, useContext } from 'react'

import navigation, { bottomNavigation } from '@/routes/sidebar'
import SidebarContext from '@/context/SidebarContext'
import { Logo } from '@/components/Sidebar/Logo'
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
          className="drawer-button drawer-overlay z-10 backdrop-blur-md"
        ></label>
        <div className="menu z-0 w-72 p-3 pr-5 text-base-content">
          <div className="card h-full bg-base-100 shadow-xl">
            <Logo />
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
