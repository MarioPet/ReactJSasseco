import React from "react";

const TodoList = (props) => {
    return (
        <div id="list">
            <ol>
                {props.list.map(el => {
                    return (<li className={el.done ? "done" : ""} key={el.id}>
                        {el.todo}
                        <input
                            onChange={(event) => props.HandleStatusChange(event, el.id)}
                            type="checkbox"
                       />
                    </li>)
                })}
            </ol>
        </div>
    )
}

export default TodoList;