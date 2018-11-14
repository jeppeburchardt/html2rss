import * as commandLineArgs from "command-line-args";
import { parse } from './parser';
import { build } from './builder';

interface CommandLineOptions {
  itemSelector: string;
  titleSelector: string;
  linkSelector: string;
}

const optionDefinitions = [
  { name: "itemSelector", alias: "i", type: String },
  { name: "titleSelector", alias: "t", type: String },
  { name: "linkSelector", alias: "l", type: String },
];

const options: CommandLineOptions = commandLineArgs(
  optionDefinitions
) as CommandLineOptions;

process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (data) {
  process.stdout.write(build(parse(data, options.itemSelector, options.titleSelector, options.linkSelector)));
});
