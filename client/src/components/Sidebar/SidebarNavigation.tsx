import { useRouter } from 'next/router'
import Link from 'next/link'

import { routeIsActive, INavigation } from '@/routes/sidebar'
import clsx from 'clsx'

interface IProps {
  navigation: INavigation[]
  linkClicked: () => void
  className?: string
}

const SidebarNavigation = ({ navigation, linkClicked, className }: IProps) => {
  const { pathname } = useRouter()

  return (
    <ul className={clsx('menu', className)}>
      {navigation.map((item) => (
        <li
          className={clsx(
            routeIsActive(pathname, item)
              ? 'bordered text-primary'
              : 'opacity-75'
          )}
          key={item.name}
        >
          <Link href={item.href} key={item.name}>
            <a className="text-sm font-semibold" onClick={linkClicked}>
              <item.icon className="mr-2 h-6 w-6" aria-hidden="true" />
              {item.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SidebarNavigation
