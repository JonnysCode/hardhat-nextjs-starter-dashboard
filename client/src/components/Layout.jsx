import { useState } from 'react'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'

import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'


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


export function Layout({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className="">
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          navigation={navigation}
        />

        <div className="md:pl-60 flex flex-col min-h-screen bg-white dark:bg-gray-800">
          <div className="m-3 flex-grow block rounded-2xl bg-gray-100 dark:bg-gray-900">
            <div className="">
              <Header setSidebarOpen={setSidebarOpen} userNavigation={userNavigation} />
            </div>

            <main className="flex flex-grow">
              <div className="py-6 mx-3 mb-3 w-full">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
