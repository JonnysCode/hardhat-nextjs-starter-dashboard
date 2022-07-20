import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'

interface INavigation {
  name: string
  href: string
  icon?: any
  current?: boolean
  checkActive?(pathname: String, route: INavigation): boolean
  exact?: boolean
}

export function routeIsActive (pathname: String, route: INavigation): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route)
  }

  return route?.exact
    ? pathname == route?.href
    : (route?.href ? pathname.indexOf(route.href) === 0 : false)
}


const navigation: INavigation[] = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true, exact: true },
  { name: 'Team', href: '/team', icon: UsersIcon, current: false },
  { name: 'Projects', href: '/projects', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '/documents', icon: InboxIcon, current: false }
]


export function updateCurrentItem(route: INavigation) {
  navigation.map((item) => (
    item.current = false
  ))
  route.current = true;
}

export type {INavigation}
export default navigation
