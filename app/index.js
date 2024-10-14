import { useState } from 'react'; // gère l'etat local des tâches
import TaskList from '../components/TaskList';
import AddTaskForm from '../componenents/AddTaskForm';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, {text: task, completed: false }]);
    };

    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className={styles.container}>
            <h1>Gestionnaire de Tâches</h1>
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
        </div>
    );
}