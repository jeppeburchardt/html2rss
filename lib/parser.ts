import { parse as htmlParser, HTMLElement, Node } from "node-html-parser";
import { Feed, FeedItem } from "./interfaces/feed";

export const parse = (
  html: string,
  itemSelector: string,
  titleSelctor: string = 'h1, h2, h3, h4',
  linkSelector: string = 'a',
): Feed => {
  const root = htmlParser(html);

  const title = root.querySelector("title").rawText;

  const items = root
    .querySelectorAll(itemSelector)
    .map((node: Node) => {
      const itemRoot = htmlParser(node.toString() as string);
      
      const title = itemRoot.querySelector(titleSelctor) as HTMLElement;
      const link = itemRoot.querySelector(linkSelector) as HTMLElement;

      if (!title || !link) {
        // throw Error(`Unable to parse ${node.toString()}`);
        // supress errors for now. return undefined and filter those later
        return undefined;
      }

      return {
        title: title.rawText,
        url: link.attributes.href,
      };
    })
    .filter(Boolean) as FeedItem[];

  return {
    title,
    items,
  };
};
