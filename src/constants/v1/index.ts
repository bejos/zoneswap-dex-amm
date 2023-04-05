import { Interface } from '@ethersproject/abi'
import { ChainId } from '@dexcoreswap-libs/sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xe0b8838e8d73ff1CA193E8cc2bC0Ebf7Cf86F620', // TODO
  [ChainId.BSCTESTNET]: '0xe0b8838e8d73ff1ca193e8cc2bc0ebf7cf86f620'
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
