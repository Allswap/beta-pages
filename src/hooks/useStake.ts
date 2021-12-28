import { useCallback } from 'react'

import useAllSwap from './useAllSwap'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../allswap/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const allswap = useAllSwap()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(allswap),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, allswap],
  )

  return { onStake: handleStake }
}

export default useStake
