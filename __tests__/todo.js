const todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1).toLocaleString("en-CA");

var today = new Date().toLocaleString("en-CA");

var tom = new Date();
tom.setDate(tom.getDate() + 1).toLocaleString("en-CA");

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: yesterday,
    });
  });

  test("Shoud add new todo", () => {
    const todoitemsCount = all.length;
    add({
      title: "Test todo2",
      completed: false,
      dueDate: today,
    });

    add({
      title: "Test todo3",
      completed: false,
      dueDate: tom,
    });

    expect(all.length).toBe(todoitemsCount + 2);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should check retrieval of overdue items", () => {
    expect(all[0].dueDate).toBe(yesterday);
  });

  test("Should check retrieval of due today items.", () => {
    expect(all[1].dueDate).toBe(today);
  });

  test("Should check retrieval of due later items.", () => {
    expect(all[2].dueDate).toBe(tom);
  });
});
