export default function TaskItem({ task, onDelete, onToggleComplete }) {
    return (
        <li style={{ textDecoration: task.completed ? 'line-through' : none }}>
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