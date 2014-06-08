var fliptable = require("../index"),
  fs = require("fs"),
  assert = require("assert");

describe("fliptable", function() {
  describe("row to col", function() {
    it("empty", function() {
      assert.deepEqual({}, fliptable([]));
    })
    it("single col", function() {
      assert.deepEqual({a: [1, 2, 3]}, fliptable([{a: 1}, {a: 2}, {a: 3}]));
    })
    it("single col with missing value", function() {
      assert.deepEqual({a: [1, undefined, 3]}, fliptable([{a: 1}, {}, {a: 3}]));
    })
    it("single col with missing value at begin", function() {
      assert.deepEqual({a: [undefined, 2,  3]}, fliptable([{}, {a: 2}, {a: 3}]));
    })
    it("single col with missing value at end", function() {
      assert.deepEqual({a: [1, 2, undefined]}, fliptable([{a: 1}, {a: 2}, {}]));
    })
    it("multi col", function() {
      assert.deepEqual({a: [1, 2, 3], b: [4, 5, 6]}, fliptable([{a: 1, b: 4}, {a: 2, b: 5}, {a: 3, b: 6}]));
    })
    it("multi col with missing value", function() {
      assert.deepEqual({a: [1, undefined, 3], b: [4, 5, 6], c: [7, undefined, 9]}, fliptable([{a: 1, b: 4, c: 7}, {b: 5}, {a: 3, b: 6, c: 9}]));
    })
    it("col with depth", function() {
      assert.deepEqual({a: [{v: 1}, {v: 2}, {v: 3}]}, fliptable([{a: {v: 1}}, {a: {v: 2}}, {a: {v: 3}}]));
    })
  })
  describe("col to row", function() {
    it("empty", function() {
      assert.deepEqual([], fliptable({}));
    })
    it("single col", function() {
      assert.deepEqual([{a: 1}, {a: 2}, {a: 3}], fliptable({a: [1, 2, 3]}));
    })
    it("single col with missing value", function() {
      assert.deepEqual([{a: 1}, {}, {a: 3}], fliptable({a: [1, undefined, 3]}));
    })
    it("single col with missing value at begin", function() {
      assert.deepEqual([{}, {a: 2}, {a: 3}], fliptable({a: [undefined, 2,  3]}));
    })
    it("single col with missing value at end", function() {
      assert.deepEqual([{a: 1}, {a: 2}, {}], fliptable({a: [1, 2, undefined]}));
    })
    it("multi col", function() {
      assert.deepEqual([{a: 1, b: 4}, {a: 2, b: 5}, {a: 3, b: 6}], fliptable({a: [1, 2, 3], b: [4, 5, 6]}));
    })
    it("multi col with missing value", function() {
      assert.deepEqual([{a: 1, b: 4, c: 7}, {b: 5}, {a: 3, b: 6, c: 9}], fliptable({a: [1, undefined, 3], b: [4, 5, 6], c: [7, undefined, 9]}));
    })
    it("col with depth", function() {
      assert.deepEqual([{a: {v: 1}}, {a: {v: 2}}, {a: {v: 3}}], fliptable({a: [{v: 1}, {v: 2}, {v: 3}]}));
    })
  });
  describe("./test/data.json", function() {
    var rows = require("./data.json");
    console.log("row", JSON.stringify(rows).length);
    console.log("col", JSON.stringify(fliptable(rows)).length);

    assert.deepEqual(rows, fliptable(fliptable(rows)));
  })
})
