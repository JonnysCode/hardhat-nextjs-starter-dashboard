import { bottomIcons, bottomDisclaimer } from '@/routes/sidebar'
import Link from 'next/link'

import styles from '@/components/Sidebar/SidebarFooter.module.css'
import clsx from 'clsx'

const SidebarFooter = () => {
  return (
    <div className="rounded-box m-2 bg-base-200 p-4">
      <div
        className={clsx(
          styles.hide,
          'mx-4 flex flex-row justify-center text-center'
        )}
      >
        {bottomDisclaimer.map((item) => (
          <div key={item.name} className="flex flex-row">
            <Link href={item.href}>
              <a className="text-xs opacity-60 hover:opacity-90">{item.name}</a>
            </Link>
            <div className="mx-2 text-xs leading-4 opacity-50">&bull;</div>
          </div>
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
