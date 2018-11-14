"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commandLineArgs = require("command-line-args");
var parser_1 = require("./parser");
var builder_1 = require("./builder");
var optionDefinitions = [
    { name: "itemSelector", alias: "i", type: String },
    { name: "titleSelector", alias: "t", type: String },
    { name: "linkSelector", alias: "l", type: String },
];
var options = commandLineArgs(optionDefinitions);
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (data) {
    process.stdout.write(builder_1.build(parser_1.parse(data, options.itemSelector, options.titleSelector, options.linkSelector)));
});
