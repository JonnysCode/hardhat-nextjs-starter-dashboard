import { MenuAlt2Icon } from '@heroicons/react/outline'

const SidebarToggle = (...props: any) => {
  console.log('SidebarToggle', ...props)
  return (
    <div>
      <div className="flex items-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-square drawer-button btn-ghost lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt2Icon className="h-7 w-7" aria-hidden="true" />
        </label>
      </div>
    </div>
  )
}

export default SidebarToggle
