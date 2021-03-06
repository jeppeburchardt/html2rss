"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = function (feed) {
    return "<?xml version=\"1.0\" encoding=\"UTF-8\" ?><rss version=\"2.0\"><channel><title>" + feed.title + "</title>" + feed.items.map(function (item) {
        return "<item><title>" + item.title + "</title><link>" + item.url + "</link></item>";
    }).join('') + "</channel>";
};
