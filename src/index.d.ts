import Transport from '@ledgerhq/hw-transport'

export interface ResponseBase {
  error_message: string
  return_code: number
}

export interface ResponseAddress extends ResponseBase {
  address: string
  pubKey: string
}

export interface ResponseVersion extends ResponseBase {
  device_locked: boolean
  major: number
  minor: number
  patch: number
  test_mode: boolean
}

export interface ResponseAllowlistPubKey extends ResponseBase {
  pubKey: string
}

export interface ResponseAllowlistHash extends ResponseBase {
  hash: Buffer
}

export interface ResponseSign extends ResponseBase {
  signature: Buffer
}

export interface SubstrateApp {
  new (transport: Transport, CLA: number, slip0044: number): SubstrateApp

  getVersion(): Promise<ResponseVersion>

  getAddress(
    account: number,
    change: number,
    addressIndex: number,
    requireConfirmation?: boolean,
    scheme?: number,
  ): Promise<ResponseAddress>

  signSendChunk(chunkIdx: number, chunkNum: number, chunk: Buffer, scheme?: number): Promise<ResponseSign>

  sign(account: number, change: number, addressIndex: number, message: Buffer, scheme?: number): Promise<ResponseSign>

  // Ledgeracio Related
  getAllowListPubKey(): Promise<ResponseAllowlistPubKey>

  setAllowListPubKey(pk: Buffer): boolean

  getAllowListHash(): Promise<ResponseAllowlistHash>
}

export type SubstrateAppCreator = (transport: Transport) => SubstrateApp

export const newKusamaApp: SubstrateAppCreator
export const newPolkadotApp: SubstrateAppCreator
export const newPolymeshApp: SubstrateAppCreator
export const newDockApp: SubstrateAppCreator
export const newCentrifugeApp: SubstrateAppCreator
export const newEdgewareApp: SubstrateAppCreator
export const newEquilibriumApp: SubstrateAppCreator
export const newGenshiroApp: SubstrateAppCreator
export const newStatemintApp: SubstrateAppCreator
export const newStatemineApp: SubstrateAppCreator
export const newNodleApp: SubstrateAppCreator
export const newSoraApp: SubstrateAppCreator
export const newPolkadexApp: SubstrateAppCreator
export const newBifrostApp: SubstrateAppCreator
export const newKaruraApp: SubstrateAppCreator
export const newReefApp: SubstrateAppCreator
export const newAcalaApp: SubstrateAppCreator
export const newXXNetworkApp: SubstrateAppCreator
export const newParallelApp: SubstrateAppCreator
export const newAstarApp: SubstrateAppCreator
export const newComposableApp: SubstrateAppCreator
export const newStafiApp: SubstrateAppCreator
export const newAlephZeroApp: SubstrateAppCreator
export const newInterlayApp: SubstrateAppCreator
export const newUniqueApp: SubstrateAppCreator
