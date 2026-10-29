import { test } from "node:test";
import assert from "node:assert/strict";
import { add, square } from "../src/math.js";

test("add", () => {
  assert.equal(add(2, 3), 5);
});

test("square", () => {
  assert.equal(square(4), 16);
  assert.equal(square(0), 0);
  assert.equal(square(-3), 9);
});
