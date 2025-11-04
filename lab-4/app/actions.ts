"use server";

/**
 * we defined here the type of the todo item
 */
type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

/**
 * we defined here initial todos. We store them in a variable in the server's memory wich we can mutate using the other functions.
 * This approach is not recommended for production, but it is useful for this example. In production, you would use a database.
 */
let itemsFromBackend: Todo[] = [
  { id: "1", text: "Learn React", completed: false },
  { id: "2", text: "Build a todo app", completed: true },
  { id: "3", text: "Deploy to production", completed: false },
];

/**
 * This function returns the list of todos
 * @returns the list of todos
 */
export async function getItems() {
  return itemsFromBackend;
}

/**
 * Use this method to create a new todo item
 * @param text the text of the new todo item we want to add
 */
export async function createItem(text: Todo["text"]) {
  itemsFromBackend.push({
    id: Date.now().toString(),
    text,
    completed: false,
  });
}

/**
 * Use this method to delete a todo item
 * @param id the id of the todo item we want to delete
 */
export async function deleteItem(id: Todo["id"]) {
  //TODO: implement deleteItem. It takes an id and deletes the item with that id from the itemsFromBackend array. The goal of this method is to override the itemsFromBackend array with the itemsFromBackend array without the item with the id passed as an argument.
  itemsFromBackend = itemsFromBackend.filter((item) => item.id !== id);
}

/**
 * Use this method to mark a todo item as incomplete
 * @param id the id of the todo item we want to mark as incomplete
 */
export async function markIncomplete(id: Todo["id"]) {
  const item = itemsFromBackend.find((item) => item.id === id);
  if (item) {
    item.completed = false;
  }
}

/**
 * Use this method to mark a todo item as done
 * @param id the id of the todo item we want to mark as done
 */
export async function markDone(id: Todo["id"]) {
  const item = itemsFromBackend.find((item) => item.id === id);
  if (item) {
    item.completed = true;
  }
}

/**
 * Use this method to update a todo item
 * @param id the id of the todo item we want to update
 * @param text the new text of the todo item
 */
export const updateItem = async (id: Todo["id"], text: Todo["text"]) => {
  //TODO: implement updateItem. It takes an id and a text and updates the item with that id in the itemsFromBackend array.
  const item = itemsFromBackend.find((item) => item.id === id);
  if (item) {
    item.text = text;
  }
  //TODO: you should use the find method to find the item with the id passed as an argument and update its text property with the text passed as an argument.

  //TODO: the code should be similar to the markDone and markIncomplete methods.
};
