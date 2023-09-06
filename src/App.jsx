import React, { useState } from 'react';
import { Header } from './Component/Header';

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
  const [tasks, setTasks] = useState([
    { id: 1, name: 'EJemplo Tarea 1', completed: false },
    { id: 2, name: 'Ejemplo Tarea 2', completed: true },
  ]);
  const [newTaskName, setNewTaskName] = useState('');

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
