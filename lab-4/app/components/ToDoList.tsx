"use client";
import { useState } from "react";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  markDone,
  markIncomplete,
} from "@/app/actions";
import TodoItem from "@/app/components/ToDoListItem";

/**
 * We try to infer the type returned by the `getItems` function which is async/a promise.
 */
type ToDoListType = Awaited<ReturnType<typeof getItems>>;

export default function ToDoList({
  todosInitial,
}: {
  todosInitial: ToDoListType;
}) {
  const [todos, setTodos] = useState<ToDoListType>(todosInitial);
  const [newTodo, setNewTodo] = useState("");

  const handleToggle = async (id: string) => {


    // This is the old implementation

    // const index = todos.findIndex((todo) => todo.id === id);
    // if (index != -1) {
    //   if (todos[index].completed) {
    //     todos[index].completed = false;
    //   } else {
    //     todos[index].completed = true;
    //   }

    //   setTodos([...todos]);
    // }

    // This is the new implementation. We do not need to use the findIndex method anymore because we do not need to modify the array directly here anymore. The logic is moved in the actions file which is the best practice.
    const item = todos.find((todo) => todo.id === id);
    if (item) {
      if (item.completed) {
        await markIncomplete(id);
      } else {
        await markDone(id);
      }
      setTodos(await getItems());
    }
  };

  const handleDelete = async (id: string) => {
    // This is the old implementation
    // const items = todos.filter((todo) => todo.id !== id);
    // setTodos([...items]);

    // This is the new implementation. We do not need to use the filter method anymore because we do not need to modify the array directly here anymore.
    await deleteItem(id);
    setTodos(await getItems());
  };

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      // This is the old implementation
      // const items = todos;
      // items.push({ id: crypto.randomUUID(), text: newTodo, completed: false });

      // This is the new implementation. We do not need to use the push method anymore because we do not need to modify the array directly here anymore.
      await createItem(newTodo.trim());
      setTodos(await getItems());
      setNewTodo("");
    }
  };

  const handleEdit = async (id: string, text: string) => {
    // This is the old implementation
    // const index = todos.findIndex((todo) => todo.id === id);
    // if (index != -1) {
    //   todos[index].text = text;
    //   setTodos([...todos]);
    // }

    // This is the new implementation. We do not need to use the findIndex method anymore because we do not need to modify the array directly here anymore.
    await updateItem(id, text);
    setTodos(await getItems());
  };

  return (
    <div className="grow max-w-4xl p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form onSubmit={handleAddTodo} className="flex mb-4 shadow-lg">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="grow rounded-l-lg p-2 text-black outline-none cursor-pointer"
        />
        <button type="submit" className="rounded-r-lg bg-blue-600 p-2 text-white">
          Add
        </button>
      </form>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}
