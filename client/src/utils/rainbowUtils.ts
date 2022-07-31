import { useEffect, useState } from 'react'
import { darkTheme, lightTheme, Theme } from '@rainbow-me/rainbowkit'
import merge from 'lodash.merge'

import { color } from '@/utils/daisyUtils'

const themeFromDaisy = (theme: string | undefined): Theme => {
  const myTheme = merge(theme === 'dark' ? darkTheme() : lightTheme(), {
    colors: {
      accentColor: color('primary'),
      connectButtonBackground: color('base', '300'),
      connectButtonInnerBackground: color('base', '100'),
      menuItemBackground: color('base', '300'),
      modalBackground: color('base', '300'),
    },
  } as Theme)

  return myTheme
}

const useRainbowTheme = (): Theme => {
  const [rainbowTheme, setRainbowTheme] = useState<Theme>(lightTheme())

  useEffect(() => {
    let theme = document.documentElement.getAttribute('data-theme') ?? 'light'
    let t = themeFromDaisy(theme)
    setRainbowTheme(t)
    console.log('Update theme to', theme, t)
  }, [])

  return rainbowTheme
}

const theme = (): Theme => {
  const myTheme = merge(lightTheme(), {
    colors: {
      accentColor: 'hsl(var(--p))',
      accentColorForeground: 'hsl(var(--pc))',
      actionButtonBorder: 'hsla(var(--b3), 0.5)',
      actionButtonBorderMobile: 'hsl(var(--b1))',
      actionButtonSecondaryBackground: 'hsl(var(--b1))',
      closeButton: 'hsl(var(--pc))',
      closeButtonBackground: 'hsl(var(--b1))',
      connectButtonBackground: 'hsl(var(--b3))',
      connectButtonBackgroundError: '#FF494A',
      connectButtonInnerBackground: 'hsl(var(--b1))',
      connectButtonText: 'hsl(var(--pc))',
      connectButtonTextError: '#FFF',
      connectionIndicator: 'hsl(var(--s))',
      error: '#FF494A',
      generalBorder: 'hsl(var(--b1))',
      generalBorderDim: 'hsla(var(--b1), 0.5)',
      menuItemBackground: 'hsl(var(--b3))',
      modalBackdrop: 'hsla(var(--b1), 0.5)',
      modalBackground: 'hsl(var(--b3))',
      modalBorder: 'transparent',
      modalText: 'hsl(var(--pc))',
      modalTextDim: 'hsla(var(--pc), 0.5)',
      modalTextSecondary: 'hsla(var(--pc), 0.8)',
      profileAction: 'hsla(var(--b3), 0.2)',
      profileActionHover: 'rgba(255, 255, 255, 0.5)',
      profileForeground: 'hsl(var(--pc))',
      selectedOptionBorder: 'hsl(var(--b3))',
      standby: '#FFD641',
    },
    shadows: {
      connectButton: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      dialog: '0px 8px 32px rgba(0, 0, 0, 0.32)',
      profileDetailsAction: '0px 2px 6px rgba(37, 41, 46, 0.04)',
      selectedOption: '0px 2px 6px rgba(0, 0, 0, 0.24)',
      selectedWallet: '0px 2px 6px rgba(0, 0, 0, 0.12)',
      walletLogo: '0px 2px 16px rgba(0, 0, 0, 0.16)',
    },
  } as Theme)

  return myTheme
}

export { useRainbowTheme, theme }
