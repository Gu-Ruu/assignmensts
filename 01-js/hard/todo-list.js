/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    //Initializes an empty array to store the list of todos
    this.todos = [];
  }

  add(todo) {
    //Adds a new todo to the end of the array
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    //Remove the todo at the specified index from the 'todos' array.
    //Checks if the 'IndexOfTodo' is within bounds. if not,it throws an "index out of bounds" error
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      throw new Error("Index out of bounds");
    }
  }

  update(index, updatedTodo) {
    //update the todo at the specified index with the new 'updatedtodo' array.
    //Checks if the 'Index' is within bounds. if not,it throws an "index out of bounds" error
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      throw new Error("Index out of bounds");
    }
  }

  getAll() {
    //Returns the entire list of todos
    return this.todos;
  }

  get(indexOfTodo) {
    //Returns the todo at the specified index
    //Checks if the 'IndexOfTodo' is within bounds. if not,it throws an "index out of bounds" error

    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      throw new Error("Index out of bounds");
    }
  }

  clear() {
    //Clear all todos by setting the 'todos' array to an empty array
    this.todos = [];
  }
}

const todoList = new Todo();
todoList.add("Buy Groceries");
todoList.add("Pay Bills");
todoList.add("Drinking water");

console.log(todoList.getAll());
console.log(todoList.get(1));

todoList.update(1, "Pay electicity bills");
console.log(todoList.getAll());

todoList.remove(0);
console.log(todoList.getAll());

todoList.clear();
console.log(todoList.getAll());
// module.exports = Todo;
