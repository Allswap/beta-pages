import { useCallback } from 'react'

import useAllSwap from './useAllSwap'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../allswap/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const allswap = useAllSwap()
  const masterChefContract = getMasterChefContract(allswap)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, allswap],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
