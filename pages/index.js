import React, { useEffect, useState } from 'react'; // Importer useState et useEffect
import TaskForm from '@/components/TaskForm';
import TaskList from '../components/TaskList';
import styles from '../styles/Home.module.css';
import Head from 'next/head';


export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Charge les tâches depuis le localStorage lors de l'initialisation
  useEffect(() => {
    if (isMounted) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    }
    
  }, [isMounted]);

  // Sauvegarde les tâches dans localStorage lors de chaque mise à jour
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isMounted]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ma Todo-List du MasterChief</title>
      </Head>
      <h1 className={styles.title}>To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} />
    </div>
  );
}

function TaskItem({ task, onDelete, onToggleComplete }) {
  // Vérifiez si task est défini
  if (!task) {
    return null; 
  }

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      {task.text}
      <button onClick={() => onDelete(task.id)}>Supprimer</button>
    </li>
  );
}
