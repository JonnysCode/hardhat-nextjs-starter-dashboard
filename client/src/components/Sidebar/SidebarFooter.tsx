import { bottomIcons, bottomDisclaimer } from '@/routes/sidebar'
import Link from 'next/link'

const SidebarFooter = () => {
  return (
    <div className="m-2 rounded-2xl bg-base-200 p-4">
      <div className="mx-4 flex flex-row justify-between text-center">
        {bottomDisclaimer.map((item) => (
          <>
            <Link href={item.href} key={item.name}>
              <a className="text-xs opacity-60 hover:opacity-90">{item.name}</a>
            </Link>
            <div className="text-xs leading-4 opacity-50 last:hidden">
              &bull;
            </div>
          </>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        {bottomIcons.map((item) => (
          <Link href={item.href} key={item.name}>
            <a className="space-x-4">
              <item.icon
                className="mx-2 h-4 w-4 flex-shrink-0 opacity-50 hover:opacity-90"
                aria-hidden="true"
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SidebarFooter
