export type Store = {
    data: StoreItem[]
}
export type StoreItem = {
    title: string,
    desc: string,
    purchaseLimit: number,
    isAvailable: boolean,
    expireTimestamp: number,
    shopType: string,
    pricing: StoreItemContent[],
    content: StoreItemContent[],
    offerID: string,
    asset: string
}

export type StoreItemContent = {
    ref: string,
    name?: string,
    quantity: number
}