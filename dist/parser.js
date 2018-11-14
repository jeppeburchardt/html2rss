"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_html_parser_1 = require("node-html-parser");
exports.parse = function (html, itemSelector, titleSelctor, linkSelector, imageSelector) {
    var root = node_html_parser_1.parse(html);
    var title = root.querySelector("title").rawText;
    var items = root
        .querySelectorAll(itemSelector)
        .map(function (node) { return node.toString(); });
    return {
        title: title,
        items: items.map(function (itemHtml) {
            var itemRoot = node_html_parser_1.parse(itemHtml);
            return {
                title: itemRoot.querySelector(titleSelctor).rawText,
                url: itemRoot.querySelector(linkSelector).rawText,
                image: itemRoot.querySelector(imageSelector).rawText
            };
        })
    };
};
