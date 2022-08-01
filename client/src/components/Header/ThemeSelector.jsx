import { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { SunIcon, DesktopComputerIcon } from '@heroicons/react/outline'
import {
  TbBuildingSkyscraper,
  TbCandy,
  TbMoonStars,
  TbPacman,
} from 'react-icons/tb'

const themes = [
  { name: 'Light', value: 'light', icon: SunIcon },
  { name: 'Dark', value: 'dark', icon: TbMoonStars },
  { name: 'Cupcake', value: 'cupcake', icon: TbCandy },
  { name: 'Lofi', value: 'lofi', icon: TbBuildingSkyscraper },
  { name: 'Cyberpunk', value: 'cyberpunk', icon: TbPacman },
  { name: 'System', value: 'system', icon: DesktopComputerIcon },
]

const getTheme = (theme) => {
  return themes.find((t) => t.value === theme)
}

export function ThemeSelector(props) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(
    themes.find((t) => t.value === theme)
  )

  useEffect(() => {
    if (!selectedTheme) {
      setSelectedTheme(getTheme(theme))
    } else {
      setTheme(selectedTheme.value)
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
        className="flex h-6 w-6 items-center justify-center rounded-lg bg-base-100 shadow-lg ring-1 ring-base-300"
        aria-label={selectedTheme?.name}
      >
        {themes.map((theme) => (
          <theme.icon
            key={theme.value}
            className={clsx(
              'h-5 w-5',
              theme.value === resolvedTheme ? 'block' : 'hidden',
              selectedTheme.value === 'system'
                ? 'fill-base-content/40 text-base-content'
                : 'fill-primary/40 text-primary'
            )}
          />
        ))}
      </Listbox.Button>
      <Listbox.Options className="absolute left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-base-100 p-2 text-sm font-medium shadow-md ring-1 ring-base-300">
        {themes.map((theme) => (
          <Listbox.Option
            key={theme.value}
            value={theme}
            className={({ active, selected }) =>
              clsx(
                'flex cursor-pointer select-none items-center rounded-lg p-1',
                {
                  'text-primary': selected,
                  'text-base-content': active && !selected,
                  'text-base-content/75': !active && !selected,
                  'bg-base-200': active,
                }
              )
            }
          >
            {({ selected }) => (
              <>
                <div className="rounded-md bg-base-100 p-1 ring-1 ring-base-300">
                  <theme.icon
                    className={clsx('h-5 w-5', {
                      'fill-primary/40 text-primary': selected,
                    })}
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
