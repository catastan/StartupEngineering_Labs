"use server";

import connectMongo from "@/db/mongoose";
import ToDo, { Todo } from "@/model/todo";
import { Types } from "mongoose";

export async function getItems(): Promise<Todo[]> {
  try {
    await connectMongo();
    const todos = await ToDo.find({}).lean<Todo[]>();
    const formattedTodos = todos.map((todo) => ({
      _id: todo._id.toString(),
      text: todo.text,
      completed: todo.completed,
    }));
    return formattedTodos;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function createItem(text: Todo["text"]) {
  try {
    await connectMongo();
    const newTodo = new ToDo({
      _id: new Types.ObjectId(), // Manually provide an _id
      text,
      completed: false, // Default to false when creating a new task
    });
    await newTodo.save();
    console.log("Created new Todo:", newTodo);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function deleteItem(id: Todo["_id"]) {
  console.log(id);
  // TODO: delete an item
  try {
    await connectMongo();
    await ToDo.deleteOne({ _id: id });
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function markIncomplete(id: Todo["_id"]) {
  console.log(id);
  // TODO: mark a task as incomplete
  try {
    await connectMongo();
    await ToDo.updateOne({ _id: id }, { completed: false });
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function markDone(id: Todo["_id"]) {
  console.log(id);
  // TODO: mark a task as done
  try {
    await connectMongo();
    await ToDo.updateOne({ _id: id }, { completed: true });
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export const updateItem = async (id: Todo["_id"], text: Todo["text"]) => {
  console.log(id);
  console.log(text);
  // TODO: update an item
  try {
    await connectMongo();
    await ToDo.updateOne({ _id: id }, { text });
  } catch (e) {
    console.error(e);
    throw e;
  }
};
