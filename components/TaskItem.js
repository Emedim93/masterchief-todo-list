import React from 'react';
import styles from '../styles/Home.module.css';

export default function TaskItem({ task, onDelete, onToggleComplete }) {
    if (!task) {
        return null;
    }
    return (
        <li className={styles.taskItem}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
            />
            <span className={task.completed ? styles.completed : styles.taskText}>
                {task.text}
            </span>
            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                Supprimer
            </button>
        </li>
    );
}