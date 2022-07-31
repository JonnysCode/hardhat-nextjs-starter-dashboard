import React, { createContext, useMemo, useState } from 'react'

export interface ThemeContextProps {
  daisyTheme: string
  setDaisyTheme: (theme: string) => void
}

export const DaisyThemeContext = createContext<ThemeContextProps>({
  daisyTheme: 'system',
  setDaisyTheme: (_: any) => {},
})

const DaisyThemeProvider = ({
  theme = 'system',
  children,
}: {
  theme?: string
  children: React.ReactNode
}) => {
  const [daisyTheme, setDaisyTheme] = useState(theme)

  const setTheme = (theme: string): void => {
    document.documentElement.setAttribute('data-theme', theme)
    let dataTheme =
      document.documentElement.getAttribute('data-theme') ?? 'system'
    console.log('Set theme:', dataTheme, '==', theme)
    setDaisyTheme(theme)
  }

  /**
   * Current context value for theme.
   */
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

export default DaisyThemeProvider
