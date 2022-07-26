import { useRouter } from 'next/router'
import Link from 'next/link'

import navigation, { routeIsActive } from '@/routes/sidebar'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Navigation({ isMobile, linkClicked }) {
  const { pathname } = useRouter()

  return (
    <div
      className={classNames(
        isMobile ? 'mt-5 h-0 flex-1 overflow-y-auto' : 'flex flex-grow flex-col'
      )}
    >
      <nav
        className={classNames(isMobile ? '' : 'flex-1 pb-4', 'space-y-1 px-2')}
      >
        {navigation.map((item) => (
          <Link href={item.href} key={item.name}>
            <a
              className={classNames(
                routeIsActive(pathname, item)
                  ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-white'
                  : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white',
                'group flex items-center rounded-lg px-2 py-2 font-medium',
                isMobile ? 'text-base' : 'text-sm'
              )}
              onClick={linkClicked}
            >
              <item.icon
                className={classNames(
                  routeIsActive(pathname, item)
                    ? 'text-zinc-500 dark:text-zinc-300'
                    : 'text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-300',
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
