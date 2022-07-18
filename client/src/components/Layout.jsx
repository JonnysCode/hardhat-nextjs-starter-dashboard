import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'


const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function ProfileMenu({ userNavigation }) {
    return (
        <div>
            <Menu as="div" className="ml-3 relative">
                <div>
                <Menu.Button className="max-w-xs bg-white dark:bg-gray-900 flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open user menu</span>
                    <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    />
                </Menu.Button>
                </div>
                <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                        {({ active }) => (
                        <a
                            href={item.href}
                            className={classNames(
                            active ? 'bg-gray-100 dark:bg-gray-600' : '',
                            'block px-4 py-2 text-sm text-gray-200'
                            )}
                        >
                            {item.name}
                        </a>
                        )}
                    </Menu.Item>
                    ))}
                </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}

function Notifications(props) {
    
    return (
        <button
            type="button"
            className="bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>);
}


function SidebarMenu({setSidebarOpen}) {
    return (
        <div className="flex items-center">
            <button
              type="button"
              className="px-4 border-r border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
        )
}


function Navigation({ navigation, isMobile }) {
    return (
      <div className={classNames(isMobile ? 'flex-1 h-0 overflow-y-auto mt-5' : 'flex-grow flex flex-col')}>
        <nav className={classNames(isMobile ? '' : 'flex-1 pb-4', 'px-2 space-y-1')}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
                'group flex items-center px-2 py-2 font-medium rounded-lg',
                isMobile ? 'text-base' : 'text-sm'
              )}
            >
              <item.icon
                className={classNames(
                  item.current ? 'text-gray-500 dark:text-gray-300' : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300',
                  'flex-shrink-0 h-6 w-6',
                  isMobile ? 'mr-4' : 'mr-3'
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    )
}


function Logo({ isMobile }) {
  return (
    <div className={classNames(isMobile ? '' : 'h-24', 'flex-shrink-0 flex items-center px-4')}>
      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
        alt="Workflow"
      />
    </div>
  );
}


function Sidebar({ sidebarOpen, setSidebarOpen, navigation }) {
  return (
    <div>
      {/* Mobile Sidebar*/}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
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
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>

                <Logo isMobile={true} />

                <Navigation navigation={navigation} isMobile={true} />
                
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
          <Navigation navigation={navigation} isMobile={false} />
        </div>
      </div>
    </div>
  );
}

function Header({ setSidebarOpen, userNavigation }) {
  return (
    <div className="sticky top-0 mt-3 z-10 mx-3 flex-shrink-0 flex h-16 rounded-t-2xl bg-white dark:bg-gray-900">

      <SidebarMenu setSidebarOpen={setSidebarOpen}/>

      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex items-center mx-4">
          <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        </div>

        <div className="ml-4 flex items-center md:ml-6">
          <Notifications />
          <ProfileMenu userNavigation={userNavigation} />
        </div>
      </div>
    </div>
  );
}


export function Layout({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          navigation={navigation}
        />

        
        <div className="md:pl-60 flex flex-col flex-1">

          <Header setSidebarOpen={setSidebarOpen} userNavigation={userNavigation} />

          <main className="flex-1">
            <div className="py-6 mx-3 mb-3 rounded-b-2xl dark:bg-gray-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="">
                  {children}
                </div>
              </div>
            </div>
          </main>

        </div>
      </div>
    </>
  )
}
