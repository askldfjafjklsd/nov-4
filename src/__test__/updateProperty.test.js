import { updateProperty } from "../functions/index.js";

describe("updateProperty", () => {
  test("should update the value of an existing key in the object", () => {
    const obj = { name: "Alice", age: 25 };
    const result = updateProperty(obj, "age", 26);

    expect(result).toEqual({ name: "Alice", age: 26 });
    expect(obj.age).toBe(26);
  });

  test("should add the key to the object if it does not exist", () => {
    const obj = { name: "Alice" };
    const result = updateProperty(obj, "age", 25);

    expect(result).toEqual({ name: "Alice", age: 25 });
    expect(obj.age).toBe(25);
  });

  test("should throw an error if the first argument is not an object", () => {
    expect(() => updateProperty("not-an-object", "key", "value")).toThrow(
      "The first argument must be an object"
    );
  });

  test("should throw an error if the key is not a string", () => {
    expect(() => updateProperty({}, 123, "value")).toThrow(
      "The key must be a string"
    );
  });

  test("should update a nested property if the key exists in a nested object", () => {
    const obj = { user: { name: "Alice", age: 25 } };
    const result = updateProperty(obj.user, "name", "Bob");

    expect(result).toEqual({ name: "Bob", age: 25 });
    expect(obj.user.name).toBe("Bob");
  });
});
