import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import  useAllSwap from '../../hooks/useAllSwap'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../allswap/utils'
import { getFarms } from '../../allswap/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const allswap = useAllSwap()
  const { account } = useWallet()

  const farms = getFarms(allswap)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
