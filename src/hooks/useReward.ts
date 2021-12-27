import { useCallback } from 'react'

import useAllSwap from './useAllSwap'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../allswap/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const allswap = useAllSwap()
  const masterChefContract = getMasterChefContract(allswap)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, allswap])

  return { onReward: handleReward }
}

export default useReward
