import { useContext, useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import {
  SunIcon,
  MoonIcon,
  DesktopComputerIcon,
} from '@heroicons/react/outline'

import { useDaisyTheme } from '@/utils/daisyUtils'
import { DaisyThemeContext } from '@/context/DaisyThemeContext'

const themes = [
  { name: 'Light', value: 'light', icon: SunIcon },
  { name: 'Dark', value: 'dark', icon: MoonIcon },
  { name: 'System', value: 'system', icon: DesktopComputerIcon },
]

export function ThemeSelector(props) {
  const { daisyTheme, setDaisyTheme } = useContext(DaisyThemeContext)
  const [selectedTheme, setSelectedTheme] = useState(
    themes.find((t) => t.value === daisyTheme)
  )

  useEffect(() => {
    if (!selectedTheme) {
      setSelectedTheme(themes.find((t) => t.value === daisyTheme))
    } else {
      setDaisyTheme(selectedTheme.value)
    }
  }, [selectedTheme])

  return (
    <Listbox
      as="div"
      value={selectedTheme}
      onChange={setSelectedTheme}
      {...props}
    >
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <Listbox.Button
        className="flex h-6 w-6 items-center justify-center rounded-lg bg-white shadow-md ring-1  ring-gray-200/5 dark:bg-zinc-900 dark:ring-inset dark:ring-black/5"
        aria-label={selectedTheme?.name}
      >
        <SunIcon
          className={clsx(
            'block h-4 w-4 dark:hidden',
            selectedTheme?.value === 'light'
              ? 'dark:fill-primary-light fill-primary'
              : 'fill-zinc-400'
          )}
        />
        <MoonIcon
          className={clsx(
            'hidden h-4 w-4 dark:block',
            selectedTheme?.value === 'dark'
              ? 'dark:fill-primary-light fill-primary text-secondary'
              : 'fill-zinc-400/20'
          )}
        />
      </Listbox.Button>
      <Listbox.Options className="absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/5">
        {themes.map((theme) => (
          <Listbox.Option
            key={theme.value}
            value={theme}
            className={({ active, selected }) =>
              clsx(
                'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1',
                {
                  'text-primary': selected,
                  'text-zinc-900 dark:text-white': active && !selected,
                  'text-zinc-700 dark:text-zinc-400': !active && !selected,
                  'bg-zinc-100 dark:bg-zinc-900/40': active,
                }
              )
            }
          >
            {({ selected }) => (
              <>
                <div className="rounded-md bg-white p-1 shadow ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-inset dark:ring-black/5">
                  <theme.icon
                    className={clsx(
                      'h-4 w-4',
                      selected
                        ? 'dark:fill-primary-light fill-primary'
                        : 'fill-zinc-400'
                    )}
                  />
                </div>
                <div className="ml-3">{theme.name}</div>
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
