import { useEffect, useState } from 'react'

const themeElementId = 'theme-toggle'

const color = (name: string, desc?: string) => {
  let cssVariable = getCssVariable(name, desc)
  let themeElement = document.getElementById(themeElementId)

  if (cssVariable && themeElement) {
    let hsl = getComputedStyle(themeElement).getPropertyValue(cssVariable)
    return 'hsl(' + hsl + ')'
  }

  return '#aaa'
}

const getCssVariable = (name: string, desc?: string) => {
  switch (name) {
    case 'primary':
    case 'secondary':
    case 'accent':
    case 'base':
    case 'neutral':
      return '--' + name.charAt(0) + (desc ? desc?.charAt(0) : '')
    case 'error':
    case 'info':
    case 'success':
    case 'warning':
      return '--' + name.substring(0, 2) + (desc ? desc?.charAt(0) : '')
    default:
      return ''
  }
}

const useDaisyTheme = (theme: string) => {
  const [daisyTheme, setDaisyTheme] = useState<string>()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    let dataTheme =
      document.documentElement.getAttribute('data-theme') ?? 'system'
    setDaisyTheme(dataTheme)
    console.log('Set theme to', dataTheme)
  }, [theme])

  return [daisyTheme]
}

export { color, themeElementId, useDaisyTheme }
