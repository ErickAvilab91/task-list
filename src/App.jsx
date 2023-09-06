import React, { useState, useEffect } from 'react';
import { Header } from './componentes/Header';

const Task = ({ task, onToggle, onDelete }) => {
  
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task)}
      />
      {task.name}
      <button onClick={() => onDelete(task)}>Eliminar</button>
    </li>
  );
};

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleToggle = (task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = (taskToDelete) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToDelete.id)
    );
  };

  const handleAdd = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), name: newTaskName, completed: false },
    ]);
    setNewTaskName('');
  };

  return (
    <div>
      <input
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button onClick={handleAdd}>Agregar tarea</button>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onToggle={handleToggle} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};


const App = () => {
  return (
    <div>
      <Header />
      <TaskList />
    </div>
  );
};

export default App;