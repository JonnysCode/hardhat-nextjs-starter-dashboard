import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  darkTheme,
  Theme,
} from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import merge from 'lodash.merge'
import colors from 'tailwindcss/colors'

import LoaderBackground from '@/components/Loader/LoaderBackground'

const myDarkTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#676de3',
    connectButtonBackground: colors.zinc[900],
    connectButtonInnerBackground: colors.zinc[800],
    menuItemBackground: colors.zinc[900],
    modalBackground: colors.zinc[900],
  },
} as Theme)

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'My App',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const Web3Wrapper = ({ children }: any) => {
  const { resolvedTheme } = useTheme()
  const [showLoader, setShowLoaderState] = useState(true)

  useEffect(() => {
    return () => {
      // Waiting to resolve variables from localStorage (Theme, ScrollPosition)
      setShowLoaderState(false)
    }
  }, [])

  return showLoader ? (
    <LoaderBackground />
  ) : (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        coolMode
        chains={chains}
        theme={
          resolvedTheme === 'light'
            ? lightTheme({
                accentColor: '#676de3',
                accentColorForeground: 'white',
                overlayBlur: 'small',
                fontStack: 'system',
              })
            : myDarkTheme
        }
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default Web3Wrapper
