import { ChainId } from '@dexcoreswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xd1af6520AbAEd7C25839168f7143Dd49814EA79c', // TODO
  [ChainId.TESTNET]: '0xEe0df471Ea84a504755d157002C23275D0C05De8'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
