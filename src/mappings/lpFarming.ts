import {
  Staked,
} from '../types/LpFarming/LpFarming'
import {StakingAction} from '../types/schema'

export function handleStake(event: Staked): void {
  let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

  let d = new StakingAction(id)
  d.user = event.params.account
  d.amount = event.params.amount
  d.blockNumber = event.block.number.toI32()
  d.blockTimestamp = event.block.timestamp.toI32()
  d.txHash = event.transaction.hash.toHex()
  d.save()
}
