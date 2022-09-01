import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo])
    }

    const remove = (task) => {
        setTodos(todos.filter(todo => todo.task !== task))
    }

    return (
        <>
            <h1>To Do List</h1>
            <NewTodoForm addTodo={addTodo}/>
            {todos.map(({task}) => <Todo task={task} remove={remove}/>)}
        </>
    )
}

export default TodoList;