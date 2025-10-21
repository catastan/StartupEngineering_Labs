import React from "react";
import { Todo } from "./App";
import ToDoListItem from "./ToDoListItem";

type ToDoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
};

const ToDoList: React.FC<ToDoListProps> = ({ todos, onToggle, onDelete, onEdit}) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map(todo => (
        <ToDoListItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
