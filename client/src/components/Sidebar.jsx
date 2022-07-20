import { Fragment, useRef, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  XIcon,
} from '@heroicons/react/outline'

import SidebarContext from '@/context/SidebarContext';
import { Navigation } from './Navigation';
import { Logo } from './Logo';


export function Sidebar() {
  const sidebarRef = useRef(null)
  const { isSidebarOpen, closeSidebar, saveScroll } = useContext(SidebarContext)

  const linkClickedHandler = () => {
    saveScroll(sidebarRef.current)
  }

  return (
    <div>
      {/* Mobile Sidebar*/}
      <Transition.Root show={isSidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={closeSidebar}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white dark:bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={closeSidebar}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>

                <Logo isMobile={true} />

                <Navigation isMobile={true} linkClicked={linkClickedHandler}/>
                
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop Sidebar*/}
      <div className="hidden md:flex md:w-60 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-grow overflow-y-auto bg-white dark:bg-gray-800">
          <Logo isMobile={false} />
          <Navigation isMobile={false} linkClicked={linkClickedHandler} />
        </div>
      </div>
    </div>
  );
}