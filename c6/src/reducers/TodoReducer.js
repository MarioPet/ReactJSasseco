const initialState = {
    todos: []
}

const TodoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_TODOS" :
            return {
                ...state,
                todos: action.payload
            }
        default: return state;
    }
}

export default TodoReducer