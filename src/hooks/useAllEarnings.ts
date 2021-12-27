import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../allswap/utils'
import useAllSwap from './useAllSwap'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const allswap = useAllSwap()
  const farms = getFarms(allswap)
  const masterChefContract = getMasterChefContract(allswap)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, allswap])

  useEffect(() => {
    if (account && masterChefContract && allswap) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, allswap])

  return balances
}

export default useAllEarnings
