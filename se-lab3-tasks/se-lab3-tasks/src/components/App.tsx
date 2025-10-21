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
  const [inputText, setInputText] = useState<string>("");

  const addTodo = () => {
    if (inputText.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: inputText.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };

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
      <div className="w-full max-w-md">
        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTodo()}
            placeholder="Add new todo..."
            className="flex-1 px-4 py-2 border rounded"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ToDoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
