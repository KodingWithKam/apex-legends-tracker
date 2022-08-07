export type MapRotationResponse = {
    data: MapRotation
}

export type MapRotation = {
    current: MapRotationData,
    next: MapRotationData,
}

export type MapRotationData = {
    start: number,
    end: number,
    readableDate_start: string,
    readableDate_end: string,
    map: string,
    code: string,
    DurationInSecs: number,
    DurationInMinutes: number,
    asset: string,
    remainingSecs?: number,
    remainingMins?: number,
    remainingTimer?: string

}