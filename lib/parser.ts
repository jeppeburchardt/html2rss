import { Feed } from "./interfaces/feed";
import { parse as htmlParser } from "node-html-parser";

export const parse = (
  html: string,
  itemSelector: string,
  titleSelctor: string,
  linkSelector: string,
  imageSelector: string
): Feed => {
  const root = htmlParser(html);

  const title = root.querySelector("title").rawText;

  const items = root
    .querySelectorAll(itemSelector)
    .map(node => node.toString() as string);


  return {
    title,
    items: items.map((itemHtml: string) => {
      const itemRoot = htmlParser(itemHtml);
      return {
        title: itemRoot.querySelector(titleSelctor).rawText,
        url: itemRoot.querySelector(linkSelector).rawText, //attributes.href,
        image: itemRoot.querySelector(imageSelector).rawText
      };
    })
  };
};
