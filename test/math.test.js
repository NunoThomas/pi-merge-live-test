import { test } from "node:test";
import assert from "node:assert/strict";
import { add, square, negate } from "../src/math.js";

test("add", () => {
  assert.equal(add(2, 3), 5);
});

test("square", () => {
  assert.equal(square(4), 16);
  assert.equal(square(0), 0);
  assert.equal(square(-3), 9);
});

test("negate", () => {
  assert.equal(negate(5), -5);
  assert.equal(negate(-3), 3);
  assert.equal(negate(0), -0);
});
