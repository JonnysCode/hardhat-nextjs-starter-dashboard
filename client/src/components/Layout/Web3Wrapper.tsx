import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { themeElementId } from '@/utils/daisyUtils'
import LoaderBackground from '@/components/Loader/LoaderBackground'
import { theme } from '@/utils/rainbowUtils'

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

const daisyTheme = theme()

const Web3Wrapper = ({ children }: any) => {
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
      <RainbowKitProvider coolMode chains={chains} theme={daisyTheme}>
        <div id={themeElementId}>{children}</div>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default Web3Wrapper
