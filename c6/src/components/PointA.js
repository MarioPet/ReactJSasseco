import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { AddMovie } from "../actions/MoviesActions";

const PointA = () => {

    const movies = useSelector(state => state.MoviesReducer.movies);
    const dispatch = useDispatch();

    return (
        <div id="point-a">
            <h2>My name is Point A</h2>
            <hr />
            <button onClick={() => dispatch(AddMovie("Stalker"))}>+ Add Movie to List</button>
            {movies.map((m, i) => <h2 key={i}>{m}</h2>)}
        </div>
    )
}

export default PointA;