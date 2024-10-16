import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function TaskForm({ onAddTask }){
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Ajouter une nouvelle tâche" required
                />
                <button type="submit">Ajouter</button>
        </form>
    );
}