import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

import navigation, { routeIsActive } from '@/routes/sidebar'

export function Navigation({ isMobile, linkClicked }: any) {
  const { pathname } = useRouter()

  return (
    <div
      className={clsx(
        isMobile ? 'mt-5 h-0 flex-1 overflow-y-auto' : 'flex flex-grow flex-col'
      )}
    >
      <nav className={clsx(isMobile ? '' : 'flex-1 pb-4', 'space-y-1')}>
        {navigation.map((item) => (
          <Link href={item.href} key={item.name}>
            <a
              className={clsx(
                routeIsActive(pathname, item)
                  ? 'border-primary  text-primary dark:text-primary'
                  : 'border-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white',
                'group flex items-center border-l-4 px-3 py-2 text-sm font-medium',
                isMobile ? 'text-base' : 'text-sm'
              )}
              onClick={linkClicked}
            >
              <item.icon
                className={clsx(
                  routeIsActive(pathname, item)
                    ? 'text-primary dark:text-primary'
                    : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300',
                  'h-6 w-6 flex-shrink-0',
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
