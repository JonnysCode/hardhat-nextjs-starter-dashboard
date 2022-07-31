import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface ValueObject {
  [themeName: string]: string
}

export interface ThemeProviderProps {
  /** List of all available theme names */
  themes?: string[]
  /** Forced theme name for the current page */
  forcedTheme?: string
  /** Whether to switch between dark and light themes based on prefers-color-scheme */
  enableSystem?: boolean
  /** Disable all CSS transitions when switching themes */
  disableTransitionOnChange?: boolean
  /** Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons */
  enableColorScheme?: boolean
  /** Key used to store theme setting in localStorage */
  storageKey?: string
  /** Default theme name (for v0.0.12 and lower the default was light). If `enableSystem` is false, the default theme is light */
  defaultTheme?: string
  /** HTML attribute modified based on the active theme. Accepts `class` and `data-*` (meaning any data attribute, `data-mode`, `data-color`, etc.) */
  attribute?: string | 'class'

  children?: React.ReactNode
}

export interface UseThemeProps {
  /** Update the theme */
  setTheme: (theme: string) => void
  /** Active theme name */
  theme?: string
  /** If `enableSystem` is true and the active theme is "system", this returns whether the system preference resolved to "dark" or "light". Otherwise, identical to `theme` */
  resolvedTheme?: string
  /** If enableSystem is true, returns the System theme preference ("dark" or "light"), regardless what the active theme is */
  systemTheme?: 'dark' | 'light'
}

const MEDIA = '(prefers-color-scheme: dark)'
const isServer = typeof window === 'undefined'

export interface ThemeContextProps {
  daisyTheme: string
  setDaisyTheme: (theme: string) => void
}

export const DaisyThemeContext = createContext<ThemeContextProps>({
  daisyTheme: 'system',
  setDaisyTheme: (_: any) => {},
})

export const useTheme = () => useContext(DaisyThemeContext)
/*
export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const context = useContext(ThemeContext)

  // Ignore nested context providers, just passthrough children
  if (context) return <Fragment>{props.children}</Fragment>
  return <Theme {...props} />
}

const DaisyThemeProvider = ({
  value,
  children,
}: {
  value?: string
  children: React.ReactNode
}) => {
  const [daisyTheme, setDaisyTheme] = useState(value)
  const [theme, setThemeState] = useState(() =>
    getTheme(storageKey, defaultTheme)
  )
  const [resolvedTheme, setResolvedTheme] = useState(() => getTheme(storageKey))
  const attrs = !value ? themes : Object.values(value)

  const setTheme = (value: string): void => {
    document.documentElement.setAttribute('data-theme', value)
    console.log('Set theme:', value)
    setDaisyTheme(value)
  }

  const applyTheme = useCallback((theme: string) => {
    let resolved = theme
    if (!resolved) return

    // If theme is system, resolve it before setting theme
    if (theme === 'system') {
      resolved = getSystemTheme()
    }

    const name = value ? value[resolved] : resolved
    const enable = disableTransitionOnChange ? disableAnimation() : null
    const d = document.documentElement

    if (attribute === 'class') {
      d.classList.remove(...attrs)

      if (name) d.classList.add(name)
    } else {
      if (name) {
        d.setAttribute(attribute, name)
      } else {
        d.removeAttribute(attribute)
      }
    }

    if (enableColorScheme) {
      const fallback = colorSchemes.includes(defaultTheme) ? defaultTheme : null
      const colorScheme = colorSchemes.includes(resolved) ? resolved : fallback
      // @ts-ignore
      d.style.colorScheme = colorScheme
    }

    enable?.()
  }, [])

  const handleMediaQuery = useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => {
      const resolved = getSystemTheme(e)
      setResolvedTheme(resolved)

      if (theme === 'system' && enableSystem && !forcedTheme) {
        applyTheme('system')
      }
    },
    [theme, forcedTheme]
  )

  /**
   * Current context value for theme.
   
  const val = useMemo(
    () => ({
      daisyTheme,
      setDaisyTheme: setTheme,
    }),
    [theme]
  )

  return (
    <DaisyThemeContext.Provider value={val}>
      {children}
    </DaisyThemeContext.Provider>
  )
}

const getTheme = (key: string, fallback?: string) => {
  if (isServer) return undefined
  let theme
  try {
    theme = localStorage.getItem(key) || undefined
  } catch (e) {
    // Unsupported
  }
  return theme || fallback
}

const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
  if (!e) e = window.matchMedia(MEDIA)
  const isDark = e.matches
  const systemTheme = isDark ? 'dark' : 'light'
  return systemTheme
}

export default DaisyThemeProvider
*/
