import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return <ul className="pl-0">
        {todos.length === 0 && "No Tasks Found"}
        {todos.map(todo => {
            return <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        })}
    </ul>
}