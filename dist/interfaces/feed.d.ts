export interface FeedItem {
    title: string;
    url: string;
    image: string;
}
export interface Feed {
    title: string;
    items: FeedItem[];
}
