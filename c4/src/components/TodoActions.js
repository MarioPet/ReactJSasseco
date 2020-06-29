import React from "react";

const TodoActions = (props) => {
    return (
        <div id="todo-actions">
            <input 
                type="text"
                placeholder="Enter what's on your mind"
                onChange={props.OnFieldChange}
                value={props.InputValue}
            />
            <button onClick={props.AddTodoItem}>+ Add to do</button>
        </div>
    )
}

export default TodoActions;