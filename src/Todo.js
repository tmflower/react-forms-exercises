import React from "react";

function Todo({task, remove}) {
    const handleRemove = () => {
        remove(task);
    }

    return (
        <div><button onClick={handleRemove} style={{backgroundColor: "red"}}>X</button>{task}</div>     
    )
}

export default Todo;