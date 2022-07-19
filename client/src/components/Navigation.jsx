import { useRouter } from "next/router";
import Link from "next/link"

import navigation, { routeIsActive } from "@/routes/sidebar";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Navigation({ isMobile, linkClicked }) {
    const { pathname } = useRouter();

    return (
      <div className={classNames(isMobile ? 'flex-1 h-0 overflow-y-auto mt-5' : 'flex-grow flex flex-col')}>
        <nav className={classNames(isMobile ? '' : 'flex-1 pb-4', 'px-2 space-y-1')}>
          {navigation.map((item) => (
            <Link href={item.href} key={item.name}>
                <a
                  className={classNames(
                    routeIsActive(pathname, item) ? 'bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
                    'group flex items-center px-2 py-2 font-medium rounded-lg',
                    isMobile ? 'text-base' : 'text-sm'
                  )}
                  onClick={linkClicked}
                >
                <item.icon
                  className={classNames(
                    routeIsActive(pathname, item) ? 'text-gray-500 dark:text-gray-300' : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300',
                    'flex-shrink-0 h-6 w-6',
                    isMobile ? 'mr-4' : 'mr-3'
                  )}
                  aria-hidden="true"
                />
                {item.name}
                </a>
            </Link>
          ))}
        </nav>
      </div>
    )
}