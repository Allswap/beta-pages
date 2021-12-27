import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { AllSwap } from '../../allswap'

export interface AllSwapContext {
  allswap?: typeof AllSwap
}

export const Context = createContext<AllSwapContext>({
  allswap: undefined,
})

declare global {
  interface Window {
    allswapsauce: any
  }
}

const AllSwapProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [allswap, setAllswap] = useState<any>()

  // @ts-ignore
  window.allswap = allswap
  // @ts-ignore
  window.eth = ethereum

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const allswapLib = new AllSwap(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setAllswap(allswapLib)
      window.allswapsauce = allswapLib
    }
  }, [ethereum])

  return <Context.Provider value={{ allswap }}>{children}</Context.Provider>
}

export default AllSwapProvider
