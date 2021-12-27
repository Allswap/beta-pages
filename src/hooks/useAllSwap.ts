import { useContext } from 'react'
import { Context } from '../contexts/AllSwapProvider'

const useAllSwap = () => {
  const { allswap } = useContext(Context)
  return allswap
}

export default useAllSwap
