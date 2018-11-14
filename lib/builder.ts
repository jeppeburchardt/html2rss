import { Feed } from "./interfaces/feed";

export const build = (feed: Feed) => {
  return `<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>${
    feed.title
  }</title>${feed.items.map(
    item =>
      `<item><title>${item.title}</title><link>${item.url}</link></item>`
  ).join('')}</channel>`;
};
