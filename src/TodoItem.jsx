export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return <li>
        <label className="mr-10">
            <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
            {title}
        </label>
        <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
}