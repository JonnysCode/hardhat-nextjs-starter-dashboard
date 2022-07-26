import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  darkTheme,
} from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import LoaderBackground from '@/components/Loader/LoaderBackground'

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
        theme={resolvedTheme === 'light' ? lightTheme() : darkTheme()}
        showRecentTransactions={true}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default Web3Wrapper
