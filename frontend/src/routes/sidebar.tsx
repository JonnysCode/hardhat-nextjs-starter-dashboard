import {
  BookOpenIcon,
  CalendarIcon,
  CogIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'
import {
  TbBrandGithub,
  TbBrandTwitter,
  TbBrandDiscord,
  TbBrandMedium,
} from 'react-icons/tb'

interface INavigation {
  name: string
  href: string
  icon?: any
  current?: boolean
  checkActive?(pathname: String, route: INavigation): boolean
  exact?: boolean
}

interface IBottomNavigation {
  name: string
  href: string
  icon?: any
}

interface IBottomIcons {
  name: string
  href: string
  icon?: any
}

interface IBottomDisclaimer {
  name: string
  href: string
}

export function routeIsActive(pathname: String, route: INavigation): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route)
  }

  return route?.exact
    ? pathname == route?.href
    : route?.href
    ? pathname.indexOf(route.href) === 0
    : false
}

const navigation: INavigation[] = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true, exact: true },
  {
    name: 'Theme Preview',
    href: '/themePreview',
    icon: UsersIcon,
    current: false,
  },
  { name: '404', href: '/404', icon: FolderIcon, current: false },
  { name: '500', href: '/500', icon: CalendarIcon, current: false },
]

const bottomNavigation: IBottomNavigation[] = [
  { name: 'Docs', href: '#', icon: BookOpenIcon },
  { name: 'Settings', href: '#', icon: CogIcon },
]

const bottomIcons: IBottomIcons[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/JonnysCode/hardhat-nextjs-starter-dashboard',
    icon: TbBrandGithub,
  },
  {
    name: 'Twitter',
    href: 'https://github.com/JonnysCode/hardhat-nextjs-starter-dashboard',
    icon: TbBrandTwitter,
  },
  {
    name: 'Discord',
    href: 'https://github.com/JonnysCode/hardhat-nextjs-starter-dashboard',
    icon: TbBrandDiscord,
  },
  {
    name: 'Medium',
    href: 'https://github.com/JonnysCode/hardhat-nextjs-starter-dashboard',
    icon: TbBrandMedium,
  },
]

const bottomDisclaimer: IBottomDisclaimer[] = [
  { name: 'About', href: '#' },
  { name: 'Privacy', href: '#' },
  { name: 'Terms', href: '#' },
]

export function updateCurrentItem(route: INavigation) {
  navigation.map((item) => (item.current = false))
  route.current = true
}

export type { INavigation, IBottomNavigation }
export { bottomNavigation, bottomIcons, bottomDisclaimer }
export default navigation
