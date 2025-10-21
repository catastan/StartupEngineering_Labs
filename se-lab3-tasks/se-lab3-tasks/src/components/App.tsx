import { useState } from "react";
import ToDoList from "./ToDoList";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

// TODO: Create a ToDoList.tsx component in components folder

function App() {
  const todosInitial: Todo[] = [
    { id: "1", text: "Caiete", completed: false },
    { id: "2", text: "Pixuri", completed: true },
    { id: "3", text: "Ghiozdan", completed: false },
  ];

  const [todos, setTodos] = useState<Todo[]>([...todosInitial]);

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="flex justify-center font-mono">
      {/* TODO: use ToDoList.tsx component */}
      <ToDoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
function setTodos(arg0: any) {
  throw new Error("Function not implemented.");
}
