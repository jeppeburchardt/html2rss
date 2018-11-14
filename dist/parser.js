"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_html_parser_1 = require("node-html-parser");
exports.parse = function (html, itemSelector, titleSelctor, linkSelector) {
    if (titleSelctor === void 0) { titleSelctor = 'h1, h2, h3, h4'; }
    if (linkSelector === void 0) { linkSelector = 'a'; }
    var root = node_html_parser_1.parse(html);
    var titleNode = root.querySelector("title");
    var title = titleNode ? titleNode.rawText.trim() : 'Unknown Feed';
    var items = root
        .querySelectorAll(itemSelector)
        .map(function (node) {
        var itemRoot = node_html_parser_1.parse(node.toString());
        var title = itemRoot.querySelector(titleSelctor);
        var link = itemRoot.querySelector(linkSelector);
        if (!title || !link) {
            // throw Error(`Unable to parse ${node.toString()}`);
            // supress errors for now. return undefined and filter those later
            return undefined;
        }
        return {
            title: title.rawText.trim(),
            url: link.attributes.href.trim(),
        };
    })
        .filter(Boolean);
    return {
        title: title,
        items: items,
    };
};
