import axios from "axios";

const FetchTodosDispatch = (todos) => {
    return {
        type: "FETCH_TODOS",
        payload: todos
    }
};

export const FetchTodos = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => dispatch(FetchTodosDispatch(res.data)))
            .catch(err => console.error(err));
    }
}