import { addTask } from "../functions/index.js";

describe("addTask", () => {
  test("should add a new task if the id does not exist", () => {
    const tasks = [{ id: 1, description: "Study" }];
    const newTask = { id: 2, description: "Practice JavaScript" };

    const result = addTask(tasks, newTask);
    expect(result).toEqual([
      { id: 1, description: "Study" },
      { id: 2, description: "Practice JavaScript" },
    ]);
  });

  test("should not add a task if the id already exists", () => {
    const tasks = [{ id: 1, description: "Study" }];
    const newTask = { id: 1, description: "Practice JavaScript" };

    const result = addTask(tasks, newTask);
    expect(result).toEqual([{ id: 1, description: "Study" }]);
  });

  test("should return the same array if no new task is added", () => {
    const tasks = [{ id: 1, description: "Study" }];
    const newTask = { id: 1, description: "Study" };

    const result = addTask(tasks, newTask);
    expect(result).toBe(tasks);
  });

  test("should throw an error if tasks is not an array", () => {
    expect(() => addTask("not-an-array", { id: 1, description: "Test" })).toThrow(
      "The tasks must be an array"
    );
  });

  test("should throw an error if newTask is not an object", () => {
    expect(() => addTask([], "not-an-object")).toThrow(
      "The newTask must be an object"
    );
  });
});