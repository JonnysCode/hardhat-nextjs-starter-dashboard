import Layout from '@/components/Layout/Layout'
import { BigNumber } from 'ethers'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useSendTransaction } from 'wagmi'

const Home: NextPage = () => {
  const { data, isIdle, isError, isLoading, isSuccess, sendTransaction } =
    useSendTransaction({
      request: {
        to: '0xce4a9990251944b625c11d2f4a28b38197aa29e1',
        value: BigNumber.from('10000000000000000'), // .01 ETH
      },
    })

  return (
    <Layout>
      <Head>
        <title>Dashboard Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow items-center justify-center py-10 px-20 text-center">
        <h1 className="my-12 text-6xl font-bold">
          <span className="text-secondary">Web3</span> starter template
        </h1>

        <div className="mx-auto max-w-xl">
          <ul className="list-outside list-disc text-left text-xl">
            <li>Only OpenSource libraries used</li>
            <li>
              <a
                className="text-primary hover:underline"
                href="https://nextjs.org"
              >
                NextJS
              </a>{' '}
              for fast server-rendered websites
            </li>
            <li>
              <a
                className="text-primary hover:underline"
                href="https://hardhat.org/"
              >
                Hardhat
              </a>{' '}
              for Ethereum based smart contract development
            </li>
            <li>
              <a
                className="text-primary hover:underline"
                href="https://tailwindcss.com/"
              >
                Tailwind CSS
              </a>{' '}
              for simple styling
            </li>
            <li>
              <a
                className="text-primary hover:underline"
                href="https://daisyui.com/"
              >
                DaisyUI
              </a>{' '}
              component library and themeing system
            </li>
            <li>
              Wallet connection with{' '}
              <a
                className="text-primary hover:underline"
                href="https://www.rainbowkit.com/"
              >
                RainbowKit
              </a>{' '}
              with full DaisyUI themeing
            </li>
            <li>
              <a
                className="text-primary hover:underline"
                href="https://wagmi.sh/"
              >
                Wagmi
              </a>{' '}
              React hooks for Ethereum
            </li>
          </ul>
        </div>

        <div className="m-12 flex-row gap-6">
          <a
            className="btn btn-secondary m-3"
            href="https://github.com/JonnysCode/hardhat-nextjs-starter-dashboard"
          >
            Star it on GitHub
          </a>
          <div
            className="btn btn-primary m-3"
            onClick={() => sendTransaction()}
          >
            <p>Donate some ETH</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
