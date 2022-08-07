export type News = {
    data: NewsItem[]
}

export type NewsItem = {
    title: string,
    link: string,
    img: string,
    short_desc: string
}