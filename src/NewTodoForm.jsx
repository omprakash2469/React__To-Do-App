import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="task">New Task</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" name="task" id="task" className="w-full" />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}