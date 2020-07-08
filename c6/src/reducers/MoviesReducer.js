const initialState = {
    movies: ["La Strada", "Hostel", "The Wild Bunch", "Stagecoach", "Rio Bravo"]
}

const MoviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_MOVIE" :
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        default: return state;
    }
}

export default MoviesReducer;