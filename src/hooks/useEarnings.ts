import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../allswap/utils'
import useAllSwap from './useAllSwap'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const allswap = useAllSwap()
  const masterChefContract = getMasterChefContract(allswap)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, allswap])

  useEffect(() => {
    if (account && masterChefContract && allswap) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, allswap])

  return balance
}

export default useEarnings
