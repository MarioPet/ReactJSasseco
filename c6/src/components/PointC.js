import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import { FetchTodos } from "../actions/TodoActions";

const PointC = () => {

    // useSelector hooks into the global state and returns the data
    const todos = useSelector(state => state.TodoReducer.todos);
    // useDispatch hooks into the dispatch event and fires actions
    const dispatch = useDispatch();

    const [ completed, handleCompleted ] = useState(null);

    HandleCompletedMaster = (e, id) => {

    }

    return (
        <div id="point-c">
            <h2> My name is Point C</h2>
            <button onClick={() => dispatch(FetchTodos())}>Fetch Todos</button>
            <hr />
            <ul>{todos.length > 0 ?
                todos.map(todo => {
                    return <li key={todo.id}>
                        <h3>
                            <span>{todo.title}</span>
                            <input
                                type="checkbox"
                                value={todo.completed}
                                checked={todo.completed}
                            />
                        </h3>
                    </li>
                }) : <h2>There are no todos to show!</h2>}</ul>
        </div>
    )
}

export default PointC;