import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../allswap/utils'
import useAllSwap from './useAllSwap'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const allswap = useAllSwap()
  const masterChefContract = getMasterChefContract(allswap)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, allswap])

  useEffect(() => {
    if (account && allswap) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, allswap])

  return balance
}

export default useStakedBalance
