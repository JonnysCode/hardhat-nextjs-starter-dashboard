import { useRouter } from 'next/router'
import Link from 'next/link'

import {
  bottomNavigation,
  bottomIcons,
  bottomDisclaimer,
} from '@/routes/sidebar'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function BottomNavigation({ isMobile }) {
  return (
    <div
      className={classNames(
        isMobile ? 'mt-5 h-0 flex-1' : '',
        'bottom-0 flex w-full'
      )}
    >
      <nav
        className={classNames(isMobile ? '' : 'flex-1', 'space-y-1 px-2 pb-2')}
      >
        <div className="mb-6">
          {bottomNavigation.map((item) => (
            <Link href={item.href} key={item.name}>
              <a
                className={classNames(
                  'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
                  'group flex items-center rounded-lg px-2 py-2 font-medium',
                  isMobile ? 'text-base' : 'text-sm'
                )}
              >
                <item.icon
                  className={classNames(
                    'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300',
                    'h-6 w-6 flex-shrink-0',
                    isMobile ? 'mr-4' : 'mr-3'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
