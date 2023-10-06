import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {lookupArchive} from '@subsquid/archive-registry'

export const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: lookupArchive('eth-mainnet'),
        chain: 'https://my.eth-mainnet.rpc',
    })
    .setFinalityConfirmation(10)
    .setFields({
        // specify field selection here
    })
    .addLog({
        address: [/* set of requested addresses */]
    })
