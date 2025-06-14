import { test, expect } from 'bun:test';
import { add } from "../dist";

test("Add fn", () => {
    expect(add(2, 2)).toBe(4);
});
