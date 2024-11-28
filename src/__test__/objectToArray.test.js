import { objectToArray } from "../functions/index.js";

describe("objectToArray", () => {
  test("should convert an object into an array of key-value pairs", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = objectToArray(obj);

    expect(result).toEqual([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]);
  });

  test("should return an empty array for an empty object", () => {
    const obj = {};
    const result = objectToArray(obj);

    expect(result).toEqual([]);
  });

  test("should throw an error if the input is not an object", () => {
    expect(() => objectToArray("not-an-object")).toThrow("Input must be an object");
    expect(() => objectToArray(42)).toThrow("Input must be an object");
    expect(() => objectToArray(null)).toThrow("Input must be an object");
    expect(() => objectToArray(undefined)).toThrow("Input must be an object");
  });

  test("should handle objects with non-string keys (numeric keys)", () => {
    const obj = { 1: "one", 2: "two", 3: "three" };
    const result = objectToArray(obj);

    expect(result).toEqual([
      ["1", "one"],
      ["2", "two"],
      ["3", "three"],
    ]);
  });

  test("should include inherited properties from the prototype", () => {
    const prototype = { inheritedKey: "value" };
    const obj = Object.create(prototype);
    obj.ownKey = "ownValue";

    const result = objectToArray(obj);

    expect(result).toEqual([
      ["ownKey", "ownValue"],
    ]);
  });
});
