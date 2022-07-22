import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'

import HeaderContext from '@/context/HeaderContext'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function ProfileMenu() {
    const { userNavigation } = useContext(HeaderContext)

    return (
        <div>
            <Menu as="div" className="relative">
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