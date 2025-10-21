import { useState } from "react";
import { Todo } from "./App";

export type ToDoListItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
};

function ToDoListItem({ todo, onToggle, onDelete, onEdit }: ToDoListItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li
      style={{
        marginBottom: "12px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "16px",
        backgroundColor: todo.completed ? "#f0f9ff" : "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease",
        border: "1px solid #e5e7eb",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{
          width: "20px",
          height: "20px",
          cursor: "pointer",
          accentColor: "#3b82f6",
        }}
      />

      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          style={{
            flex: 1,
            padding: "8px 12px",
            fontSize: "15px",
            border: "2px solid #3b82f6",
            borderRadius: "6px",
            outline: "none",
          }}
        />
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            flex: 1,
            fontSize: "15px",
            color: todo.completed ? "#9ca3af" : "#1f2937",
            fontWeight: "500",
          }}
        >
          {todo.text}
        </span>
      )}

      {isEditing ? (
        <>
          <button
            onClick={handleSave}
            style={{
              padding: "6px 16px",
              backgroundColor: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            style={{
              padding: "6px 16px",
              backgroundColor: "#6b7280",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: "6px 16px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            style={{
              padding: "6px 16px",
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}
export default ToDoListItem;
