import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'

interface IRoute{
  path?: string
  icon?: string
  name: string
  routes?: IRoute[]
  checkActive?(pathname: String, route: IRoute): boolean
  exact?: boolean
}

interface INavigation {
  name: string
  href: string
  icon?: any
  current?: boolean
  checkActive?(pathname: String, route: IRoute): boolean
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


const routes: IRoute[] = [
  {
    path: '/example', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
    exact: true,
  },
  {
    path: '/example/forms',
    icon: 'FormsIcon',
    name: 'Forms',
  },
  {
    path: '/example/cards',
    icon: 'CardsIcon',
    name: 'Cards',
  },
  {
    path: '/example/charts',
    icon: 'ChartsIcon',
    name: 'Charts',
  },
  {
    path: '/example/buttons',
    icon: 'ButtonsIcon',
    name: 'Buttons',
  },
  {
    path: '/example/modals',
    icon: 'ModalsIcon',
    name: 'Modals',
  },
  {
    path: '/example/tables',
    icon: 'TablesIcon',
    name: 'Tables',
  },
  {
    icon: 'PagesIcon',
    name: 'Pages',
    routes: [
      // submenu
      {
        path: '/example/login',
        name: 'Login',
      },
      {
        path: '/example/create-account',
        name: 'Create account',
      },
      {
        path: '/example/forgot-password',
        name: 'Forgot password',
      },
      {
        path: '/example/404',
        name: '404',
      },
      {
        path: '/example/blank',
        name: 'Blank',
      },
    ],
  },
]

export type {IRoute}
export type {routes}

export type {INavigation}
export default navigation
