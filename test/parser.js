"use strict";
var expect = require("chai").expect;
var parse = require("../dist/parser.js").parse;

const html =
  '<html><head><title>Page Title</title></head><ul><li><strong>Title 1</strong><a href="http://somewhere.com/item/1">link 1</a><p>This is a test</p></li><li><strong>Title 1</strong><a href="http://somewhere.com/item/2">link 2</a><p>This is a test</p></li><li><strong>Title 1</strong><a href="http://somewhere.com/item/3">link 3</a><p>This is a test</p></li></ul></html>';

describe("parse", () => {
  it("should parse page title from head tag", () => {
    var result = parse(html, "li", "strong", "a", "p");
    expect(result.title).to.equal("Page Title");
  });
  it("should parse 3 items", () => {
    var result = parse(html, "li", "strong", "a", "p");
    expect(result.items.length).to.equal(3);
  });
  it("should parse an item with a header", () => {
    var result = parse(html, "li", "strong", "a", "p");
    expect(result.items[0].title).to.equal("Title 1");
  });
  it("should parse an item with a header", () => {
    var result = parse(html, "li", "strong", "a", "p");
    expect(result.items[0].url).to.equal("http://somewhere.com/item/1");
    expect(result.items[1].url).to.equal("http://somewhere.com/item/2");
    expect(result.items[2].url).to.equal("http://somewhere.com/item/3");
  });
});
