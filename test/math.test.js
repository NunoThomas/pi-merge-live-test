import { test } from "node:test";
import assert from "node:assert/strict";
import { add, square, cube, negate, tripled } from "../src/math.js";

test("add", () => {
  assert.equal(add(2, 3), 5);
});

test("square", () => {
  assert.equal(square(4), 16);
  assert.equal(square(0), 0);
  assert.equal(square(-3), 9);
});

test("cube", () => {
  assert.equal(cube(3), 27);
  assert.equal(cube(0), 0);
  assert.equal(cube(-2), -8);
});

test("negate", () => {
  assert.equal(negate(5), -5);
  assert.equal(negate(-3), 3);
  assert.equal(negate(0), -0);
});

test("tripled", () => {
  assert.equal(tripled(4), 12);
  assert.equal(tripled(0), 0);
  assert.equal(tripled(-3), -9);
});
