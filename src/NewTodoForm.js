import React, {useState} from "react";

function NewTodoForm({addTodo}) {
    const INITIAL_STATE = {
        task: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ ...formData });
        setFormData(INITIAL_STATE);
    }
    return (
            <form onSubmit={handleSubmit}>
            <label htmlFor="width">Task</label>
            <input
                type="text"
                name="task"
                placeholder="enter task"
                value={formData.task}
                onChange={handleChange}
            />
            <button>Add a Task</button>
        </form>
    )
}

export default NewTodoForm;