import { ChainId } from '@dexcoreswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x40fcd694c9ebbc46a2230ad498fbde11ae0111a8', // TODO
  [ChainId.TESTNET]: '0xEe0df471Ea84a504755d157002C23275D0C05De8'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
