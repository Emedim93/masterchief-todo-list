import React from 'react';

export default function TaskItem({ task, onDelete, onToggleComplete }) {
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