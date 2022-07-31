import {
  SunIcon,
  MoonIcon,
  DesktopComputerIcon,
} from '@heroicons/react/outline'

const themes = [
  { name: 'Light', value: 'light', icon: SunIcon },
  { name: 'Dark', value: 'dark', icon: MoonIcon },
  { name: 'System', value: 'system', icon: DesktopComputerIcon },
]

const ThemeMenu = () => {
  return (
    <div className="theme-menu">
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Click
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ThemeMenu
