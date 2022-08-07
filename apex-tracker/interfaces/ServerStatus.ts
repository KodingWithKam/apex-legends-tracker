export type ServerStatusResponse = {
    data: ServerStatus;
}
export type ServerStatus = {
    Origin_login: {
        'EU-West': ServerStatusRegion,
        'EU-East': ServerStatusRegion,
        'US-West': ServerStatusRegion,
        'US-Central': ServerStatusRegion,
        'US-East': ServerStatusRegion,
        'SouthAmerica': ServerStatusRegion,
        'Asia': ServerStatusRegion,
    },
    EA_novafusion: {
        'EU-West': ServerStatusRegion,
        'EU-East': ServerStatusRegion,
        'US-West': ServerStatusRegion,
        'US-Central': ServerStatusRegion,
        'US-East': ServerStatusRegion,
        'SouthAmerica': ServerStatusRegion,
        'Asia': ServerStatusRegion,
    },
    EA_accounts: {
        'EU-West': ServerStatusRegion,
        'EU-East': ServerStatusRegion,
        'US-West': ServerStatusRegion,
        'US-Central': ServerStatusRegion,
        'US-East': ServerStatusRegion,
        'SouthAmerica': ServerStatusRegion,
        'Asia': ServerStatusRegion,
    },
    ApexOauth_Crossplay: {
        'EU-West': ServerStatusRegion,
        'EU-East': ServerStatusRegion,
        'US-West': ServerStatusRegion,
        'US-Central': ServerStatusRegion,
        'US-East': ServerStatusRegion,
        'SouthAmerica': ServerStatusRegion,
        'Asia': ServerStatusRegion,
    },
    selfCoreTest: {
        'Status-website': ServerStatusRegion,
        'Stats-API': ServerStatusRegion,
        'Overflow-#1': ServerStatusRegion,
        'Overflow-#2': ServerStatusRegion,
        'Origin-API': ServerStatusRegion,
        'Playstation-API': ServerStatusRegion,
        'Xbox-API': ServerStatusRegion,
    },
    otherPlatforms: {
        'Playstation-Network': ServerStatusRegion,
        'Xbox-Live': ServerStatusRegion,
    }
}

export type ServerStatusRegion = {
    Status: string,
    HTTPCode: number,
    ResponseTime: number,
    QueryTimestamp: number
}