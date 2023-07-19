import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/Unipeer/Unipeer"

export function createAdminTransferredEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminTransferred {
  let adminTransferredEvent = changetype<AdminTransferred>(newMockEvent())

  adminTransferredEvent.parameters = new Array()

  adminTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminTransferredEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminTransferredEvent
}

export function createAppealContributionEvent(
  _orderID: BigInt,
  _party: i32,
  _contributor: Address,
  _amount: BigInt
): AppealContribution {
  let appealContributionEvent = changetype<AppealContribution>(newMockEvent())

  appealContributionEvent.parameters = new Array()

  appealContributionEvent.parameters.push(
    new ethereum.EventParam(
      "_orderID",
      ethereum.Value.fromUnsignedBigInt(_orderID)
    )
  )
  appealContributionEvent.parameters.push(
    new ethereum.EventParam(
      "_party",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_party))
    )
  )
  appealContributionEvent.parameters.push(
    new ethereum.EventParam(
      "_contributor",
      ethereum.Value.fromAddress(_contributor)
    )
  )
  appealContributionEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return appealContributionEvent
}

export function createDisputeEvent(
  _arbitrator: Address,
  _disputeID: BigInt,
  _metaEvidenceID: BigInt,
  _evidenceGroupID: BigInt
): Dispute {
  let disputeEvent = changetype<Dispute>(newMockEvent())

  disputeEvent.parameters = new Array()

  disputeEvent.parameters.push(
    new ethereum.EventParam(
      "_arbitrator",
      ethereum.Value.fromAddress(_arbitrator)
    )
  )
  disputeEvent.parameters.push(
    new ethereum.EventParam(
      "_disputeID",
      ethereum.Value.fromUnsignedBigInt(_disputeID)
    )
  )
  disputeEvent.parameters.push(
    new ethereum.EventParam(
      "_metaEvidenceID",
      ethereum.Value.fromUnsignedBigInt(_metaEvidenceID)
    )
  )
  disputeEvent.parameters.push(
    new ethereum.EventParam(
      "_evidenceGroupID",
      ethereum.Value.fromUnsignedBigInt(_evidenceGroupID)
    )
  )

  return disputeEvent
}

export function createEvidenceEvent(
  _arbitrator: Address,
  _evidenceGroupID: BigInt,
  _party: Address,
  _evidence: string
): Evidence {
  let evidenceEvent = changetype<Evidence>(newMockEvent())

  evidenceEvent.parameters = new Array()

  evidenceEvent.parameters.push(
    new ethereum.EventParam(
      "_arbitrator",
      ethereum.Value.fromAddress(_arbitrator)
    )
  )
  evidenceEvent.parameters.push(
    new ethereum.EventParam(
      "_evidenceGroupID",
      ethereum.Value.fromUnsignedBigInt(_evidenceGroupID)
    )
  )
  evidenceEvent.parameters.push(
    new ethereum.EventParam("_party", ethereum.Value.fromAddress(_party))
  )
  evidenceEvent.parameters.push(
    new ethereum.EventParam("_evidence", ethereum.Value.fromString(_evidence))
  )

  return evidenceEvent
}

export function createFeeWithdrawnEvent(amount: BigInt): FeeWithdrawn {
  let feeWithdrawnEvent = changetype<FeeWithdrawn>(newMockEvent())

  feeWithdrawnEvent.parameters = new Array()

  feeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return feeWithdrawnEvent
}

export function createHasPaidAppealFeeEvent(
  _orderID: BigInt,
  _party: i32
): HasPaidAppealFee {
  let hasPaidAppealFeeEvent = changetype<HasPaidAppealFee>(newMockEvent())

  hasPaidAppealFeeEvent.parameters = new Array()

  hasPaidAppealFeeEvent.parameters.push(
    new ethereum.EventParam(
      "_orderID",
      ethereum.Value.fromUnsignedBigInt(_orderID)
    )
  )
  hasPaidAppealFeeEvent.parameters.push(
    new ethereum.EventParam(
      "_party",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_party))
    )
  )

  return hasPaidAppealFeeEvent
}

export function createMetaEvidenceEvent(
  _metaEvidenceID: BigInt,
  _evidence: string
): MetaEvidence {
  let metaEvidenceEvent = changetype<MetaEvidence>(newMockEvent())

  metaEvidenceEvent.parameters = new Array()

  metaEvidenceEvent.parameters.push(
    new ethereum.EventParam(
      "_metaEvidenceID",
      ethereum.Value.fromUnsignedBigInt(_metaEvidenceID)
    )
  )
  metaEvidenceEvent.parameters.push(
    new ethereum.EventParam("_evidence", ethereum.Value.fromString(_evidence))
  )

  return metaEvidenceEvent
}

export function createOrderBuyEvent(
  orderID: BigInt,
  buyer: Address,
  seller: Address,
  paymentID: i32,
  paymentAddress: string,
  token: Address,
  amount: BigInt,
  feeAmount: BigInt,
  sellerFeeAmount: BigInt
): OrderBuy {
  let orderBuyEvent = changetype<OrderBuy>(newMockEvent())

  orderBuyEvent.parameters = new Array()

  orderBuyEvent.parameters.push(
    new ethereum.EventParam(
      "orderID",
      ethereum.Value.fromUnsignedBigInt(orderID)
    )
  )
  orderBuyEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  orderBuyEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  orderBuyEvent.parameters.push(
    new ethereum.EventParam(
      "paymentID",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(paymentID))
    )
  )
  orderBuyEvent.parameters.push(
    new ethereum.EventParam(
      "paymentAddress",
      ethereum.Value.fromString(paymentAddress)
    )
  )
  orderBuyEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  orderBuyEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  orderBuyEvent.parameters.push(
    new ethereum.EventParam(
      "feeAmount",
      ethereum.Value.fromUnsignedBigInt(feeAmount)
    )
  )
  orderBuyEvent.parameters.push(
    new ethereum.EventParam(
      "sellerFeeAmount",
      ethereum.Value.fromUnsignedBigInt(sellerFeeAmount)
    )
  )

  return orderBuyEvent
}

export function createOrderCompleteEvent(orderID: BigInt): OrderComplete {
  let orderCompleteEvent = changetype<OrderComplete>(newMockEvent())

  orderCompleteEvent.parameters = new Array()

  orderCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "orderID",
      ethereum.Value.fromUnsignedBigInt(orderID)
    )
  )

  return orderCompleteEvent
}

export function createOrderPaidEvent(orderID: BigInt): OrderPaid {
  let orderPaidEvent = changetype<OrderPaid>(newMockEvent())

  orderPaidEvent.parameters = new Array()

  orderPaidEvent.parameters.push(
    new ethereum.EventParam(
      "orderID",
      ethereum.Value.fromUnsignedBigInt(orderID)
    )
  )

  return orderPaidEvent
}

export function createOrderResolvedEvent(orderID: BigInt): OrderResolved {
  let orderResolvedEvent = changetype<OrderResolved>(newMockEvent())

  orderResolvedEvent.parameters = new Array()

  orderResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "orderID",
      ethereum.Value.fromUnsignedBigInt(orderID)
    )
  )

  return orderResolvedEvent
}

export function createPaymentMethodTokenDisabledEvent(
  paymentID: i32,
  token: Address
): PaymentMethodTokenDisabled {
  let paymentMethodTokenDisabledEvent = changetype<PaymentMethodTokenDisabled>(
    newMockEvent()
  )

  paymentMethodTokenDisabledEvent.parameters = new Array()

  paymentMethodTokenDisabledEvent.parameters.push(
    new ethereum.EventParam(
      "paymentID",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(paymentID))
    )
  )
  paymentMethodTokenDisabledEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return paymentMethodTokenDisabledEvent
}

export function createPaymentMethodTokenEnabledEvent(
  paymentID: i32,
  token: Address
): PaymentMethodTokenEnabled {
  let paymentMethodTokenEnabledEvent = changetype<PaymentMethodTokenEnabled>(
    newMockEvent()
  )

  paymentMethodTokenEnabledEvent.parameters = new Array()

  paymentMethodTokenEnabledEvent.parameters.push(
    new ethereum.EventParam(
      "paymentID",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(paymentID))
    )
  )
  paymentMethodTokenEnabledEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return paymentMethodTokenEnabledEvent
}

export function createPaymentMethodUpdateEvent(
  paymentID: i32,
  paymentName: string,
  metaEvidenceID: BigInt
): PaymentMethodUpdate {
  let paymentMethodUpdateEvent = changetype<PaymentMethodUpdate>(newMockEvent())

  paymentMethodUpdateEvent.parameters = new Array()

  paymentMethodUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "paymentID",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(paymentID))
    )
  )
  paymentMethodUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "paymentName",
      ethereum.Value.fromString(paymentName)
    )
  )
  paymentMethodUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "metaEvidenceID",
      ethereum.Value.fromUnsignedBigInt(metaEvidenceID)
    )
  )

  return paymentMethodUpdateEvent
}

export function createRulingEvent(
  _arbitrator: Address,
  _disputeID: BigInt,
  _ruling: BigInt
): Ruling {
  let rulingEvent = changetype<Ruling>(newMockEvent())

  rulingEvent.parameters = new Array()

  rulingEvent.parameters.push(
    new ethereum.EventParam(
      "_arbitrator",
      ethereum.Value.fromAddress(_arbitrator)
    )
  )
  rulingEvent.parameters.push(
    new ethereum.EventParam(
      "_disputeID",
      ethereum.Value.fromUnsignedBigInt(_disputeID)
    )
  )
  rulingEvent.parameters.push(
    new ethereum.EventParam(
      "_ruling",
      ethereum.Value.fromUnsignedBigInt(_ruling)
    )
  )

  return rulingEvent
}

export function createSellerDepositEvent(
  sender: Address,
  token: Address,
  amount: BigInt
): SellerDeposit {
  let sellerDepositEvent = changetype<SellerDeposit>(newMockEvent())

  sellerDepositEvent.parameters = new Array()

  sellerDepositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  sellerDepositEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  sellerDepositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return sellerDepositEvent
}

export function createSellerPaymentMethodEvent(
  sender: Address,
  paymentID: i32,
  paymentAddress: string,
  feeRate: BigInt
): SellerPaymentMethod {
  let sellerPaymentMethodEvent = changetype<SellerPaymentMethod>(newMockEvent())

  sellerPaymentMethodEvent.parameters = new Array()

  sellerPaymentMethodEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  sellerPaymentMethodEvent.parameters.push(
    new ethereum.EventParam(
      "paymentID",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(paymentID))
    )
  )
  sellerPaymentMethodEvent.parameters.push(
    new ethereum.EventParam(
      "paymentAddress",
      ethereum.Value.fromString(paymentAddress)
    )
  )
  sellerPaymentMethodEvent.parameters.push(
    new ethereum.EventParam(
      "feeRate",
      ethereum.Value.fromUnsignedBigInt(feeRate)
    )
  )

  return sellerPaymentMethodEvent
}

export function createSellerWithdrawEvent(
  sender: Address,
  token: Address,
  amount: BigInt
): SellerWithdraw {
  let sellerWithdrawEvent = changetype<SellerWithdraw>(newMockEvent())

  sellerWithdrawEvent.parameters = new Array()

  sellerWithdrawEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  sellerWithdrawEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  sellerWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return sellerWithdrawEvent
}

export function createTimedOutByBuyerEvent(orderID: BigInt): TimedOutByBuyer {
  let timedOutByBuyerEvent = changetype<TimedOutByBuyer>(newMockEvent())

  timedOutByBuyerEvent.parameters = new Array()

  timedOutByBuyerEvent.parameters.push(
    new ethereum.EventParam(
      "orderID",
      ethereum.Value.fromUnsignedBigInt(orderID)
    )
  )

  return timedOutByBuyerEvent
}

export function createTimedOutBySellerEvent(orderID: BigInt): TimedOutBySeller {
  let timedOutBySellerEvent = changetype<TimedOutBySeller>(newMockEvent())

  timedOutBySellerEvent.parameters = new Array()

  timedOutBySellerEvent.parameters.push(
    new ethereum.EventParam(
      "orderID",
      ethereum.Value.fromUnsignedBigInt(orderID)
    )
  )

  return timedOutBySellerEvent
}
