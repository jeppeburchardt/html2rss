"use strict";
var expect = require("chai").expect;
var build = require("../dist/builder.js").build;

const feed = {
  title: "Page Title",
  items: [
    {
      title: "Item 1 Title",
      url: "http://somewhere.com",
      image: "http://somewhere.com/img.png"
    }
  ]
};

describe("builder", () => {
  it("should build a rss feed", () => {
    var result = build(feed);
    expect(result).to.equal(
      '<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>Page Title</title><item><title>Item 1 Title</title><link>http://somewhere.com</link><image><url>http://somewhere.com/img.png</url></image></item></channel>'
    );
  });
});
