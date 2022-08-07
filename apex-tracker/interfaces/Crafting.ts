export type CraftingResponse = {
    data: CraftingItem[]
};

export type CraftingItem = {
    bundle: string,
    start: number,
    end: number,
    bundleType: string,
    bundleContent: CraftingContentItem[]
};

export type CraftingContentItem = {
    item: string,
    cost: number,
    itemType: {
        name: string,
        rarity: string,
        asset: string,
        rarityHex: string
    }
};