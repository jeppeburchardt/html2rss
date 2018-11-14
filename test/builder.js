"use strict";
var expect = require("chai").expect;
var build = require("../dist/builder.js").build;

const feed = {
  title: "Page Title",
  items: [
    {
      title: "Item 1 Title",
      url: "http://somewhere.com/1"
    },
    {
      title: "Item 2 Title",
      url: "http://somewhere.com/2"
    }
  ]
};

describe("builder", () => {
  it("should build a rss feed", () => {
    var result = build(feed);
    expect(result).to.equal(
      '<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>Page Title</title><item><title>Item 1 Title</title><link>http://somewhere.com/1</link></item><item><title>Item 2 Title</title><link>http://somewhere.com/2</link></item></channel>'
    );
  });
});
