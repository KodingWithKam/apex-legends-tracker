export type PredatorResponse = {
    data: Predator
}

export type Predator = {
    RP: {
        PC: PredatorItem,
        PS4: PredatorItem,
        X1: PredatorItem,
        SWITCH: PredatorItem,
    },
    AP: {
        PC: PredatorItem,
        PS4: PredatorItem,
        X1: PredatorItem,
        SWITCH: PredatorItem,
    }
}

export type PredatorItem = {
    foundRank: number,
    val: number,
    uid: string,
    updateTimestamp: number,
    totalMastersAndPreds: number
}