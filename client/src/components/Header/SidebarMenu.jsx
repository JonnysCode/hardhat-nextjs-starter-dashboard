import { MenuAlt2Icon } from '@heroicons/react/outline'

export function SidebarMenu(...props) {
  return (
    <div {...props}>
      <div className="flex items-center">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button btn btn-ghost btn-square lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt2Icon className="h-7 w-7" aria-hidden="true" />
        </label>
      </div>
    </div>
  )
}
