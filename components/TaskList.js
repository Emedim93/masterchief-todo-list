import React from 'react';
import TaskItem from './TaskItem';
import styles from '../styles/Home.module.css';


export default function TaskList({ tasks, onDelete, onToggleComplete }) {
    return (
    <ul>
        {tasks && tasks.length > 0 ? ( // Vérifiez si tasks existe et n'est pas vide
        tasks.map((task) => (
            <TaskItem 
            key={task.id} 
              task={task} // Passez l'objet task au composant TaskItem
            onDelete={onDelete} 
            onToggleComplete={onToggleComplete} 
            />
        ))
        ) : (
        <li>Aucune tâche à afficher</li> // Message si aucune tâche n'est disponible
        )}
    </ul>
    );
}