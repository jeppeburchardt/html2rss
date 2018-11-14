import { Feed } from "./interfaces/feed";
export declare const parse: (html: string, itemSelector: string, titleSelctor: string, linkSelector: string, imageSelector: string) => Feed;
