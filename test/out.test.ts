import { test, expect } from 'bun:test';
import { add, reqwest } from "../dist";

test("Add fn", () => {
    expect(add(2, 2)).toBe(4);
});

test("Reqwest req", () => {
    expect(reqwest()).toBe(undefined);
})
