import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  const handleAddTask = () => {
    if (task.trim() === '') return;

    if (editId !== null) {
      setTodos(todos.map(todo =>
        todo.id === editId ? { ...todo, text: task } : todo
      ));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: task }]);
    }

    setTask('');
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id: number, text: string) => {
    setTask(text);
    setEditId(id);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">TO DO List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 border border-gray-300 rounded px-3 py-2 mr-2"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            {editId !== null ? 'Update' : 'Add Task'}
          </button>
        </div>
        <div className="space-y-3">
          {todos.map(todo => (
            <div key={todo.id} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded">
              <span className="text-lg">{todo.text}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(todo.id, todo.text)}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
