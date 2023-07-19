import {
  AdminTransferred as AdminTransferredEvent,
  AppealContribution as AppealContributionEvent,
  Dispute as DisputeEvent,
  Evidence as EvidenceEvent,
  FeeWithdrawn as FeeWithdrawnEvent,
  HasPaidAppealFee as HasPaidAppealFeeEvent,
  MetaEvidence as MetaEvidenceEvent,
  OrderBuy as OrderBuyEvent,
  OrderComplete as OrderCompleteEvent,
  OrderPaid as OrderPaidEvent,
  OrderResolved as OrderResolvedEvent,
  PaymentMethodTokenDisabled as PaymentMethodTokenDisabledEvent,
  PaymentMethodTokenEnabled as PaymentMethodTokenEnabledEvent,
  PaymentMethodUpdate as PaymentMethodUpdateEvent,
  Ruling as RulingEvent,
  SellerDeposit as SellerDepositEvent,
  SellerPaymentMethod as SellerPaymentMethodEvent,
  SellerWithdraw as SellerWithdrawEvent,
  TimedOutByBuyer as TimedOutByBuyerEvent,
  TimedOutBySeller as TimedOutBySellerEvent
} from "../generated/Unipeer/Unipeer"
import {
  AdminTransferred,
  AppealContribution,
  Dispute,
  Evidence,
  FeeWithdrawn,
  HasPaidAppealFee,
  MetaEvidence,
  OrderBuy,
  OrderComplete,
  OrderPaid,
  OrderResolved,
  PaymentMethodTokenDisabled,
  PaymentMethodTokenEnabled,
  PaymentMethodUpdate,
  Ruling,
  SellerDeposit,
  SellerPaymentMethod,
  SellerWithdraw,
  TimedOutByBuyer,
  TimedOutBySeller
} from "../generated/schema"

export function handleAdminTransferred(event: AdminTransferredEvent): void {
  let entity = new AdminTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAppealContribution(event: AppealContributionEvent): void {
  let entity = new AppealContribution(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._orderID = event.params._orderID
  entity._party = event.params._party
  entity._contributor = event.params._contributor
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDispute(event: DisputeEvent): void {
  let entity = new Dispute(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._arbitrator = event.params._arbitrator
  entity._disputeID = event.params._disputeID
  entity._metaEvidenceID = event.params._metaEvidenceID
  entity._evidenceGroupID = event.params._evidenceGroupID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEvidence(event: EvidenceEvent): void {
  let entity = new Evidence(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._arbitrator = event.params._arbitrator
  entity._evidenceGroupID = event.params._evidenceGroupID
  entity._party = event.params._party
  entity._evidence = event.params._evidence

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeWithdrawn(event: FeeWithdrawnEvent): void {
  let entity = new FeeWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHasPaidAppealFee(event: HasPaidAppealFeeEvent): void {
  let entity = new HasPaidAppealFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._orderID = event.params._orderID
  entity._party = event.params._party

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMetaEvidence(event: MetaEvidenceEvent): void {
  let entity = new MetaEvidence(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._metaEvidenceID = event.params._metaEvidenceID
  entity._evidence = event.params._evidence

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderBuy(event: OrderBuyEvent): void {
  let entity = new OrderBuy(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderID = event.params.orderID
  entity.buyer = event.params.buyer
  entity.seller = event.params.seller
  entity.paymentID = event.params.paymentID
  entity.paymentAddress = event.params.paymentAddress
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.feeAmount = event.params.feeAmount
  entity.sellerFeeAmount = event.params.sellerFeeAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderComplete(event: OrderCompleteEvent): void {
  let entity = new OrderComplete(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderID = event.params.orderID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderPaid(event: OrderPaidEvent): void {
  let entity = new OrderPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderID = event.params.orderID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderResolved(event: OrderResolvedEvent): void {
  let entity = new OrderResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderID = event.params.orderID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaymentMethodTokenDisabled(
  event: PaymentMethodTokenDisabledEvent
): void {
  let entity = new PaymentMethodTokenDisabled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.paymentID = event.params.paymentID
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaymentMethodTokenEnabled(
  event: PaymentMethodTokenEnabledEvent
): void {
  let entity = new PaymentMethodTokenEnabled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.paymentID = event.params.paymentID
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaymentMethodUpdate(
  event: PaymentMethodUpdateEvent
): void {
  let entity = new PaymentMethodUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.paymentID = event.params.paymentID
  entity.paymentName = event.params.paymentName
  entity.metaEvidenceID = event.params.metaEvidenceID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRuling(event: RulingEvent): void {
  let entity = new Ruling(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._arbitrator = event.params._arbitrator
  entity._disputeID = event.params._disputeID
  entity._ruling = event.params._ruling

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSellerDeposit(event: SellerDepositEvent): void {
  let entity = new SellerDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSellerPaymentMethod(
  event: SellerPaymentMethodEvent
): void {
  let entity = new SellerPaymentMethod(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.paymentID = event.params.paymentID
  entity.paymentAddress = event.params.paymentAddress
  entity.feeRate = event.params.feeRate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSellerWithdraw(event: SellerWithdrawEvent): void {
  let entity = new SellerWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTimedOutByBuyer(event: TimedOutByBuyerEvent): void {
  let entity = new TimedOutByBuyer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderID = event.params.orderID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTimedOutBySeller(event: TimedOutBySellerEvent): void {
  let entity = new TimedOutBySeller(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderID = event.params.orderID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
