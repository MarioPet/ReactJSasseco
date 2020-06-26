import React from "react";

const Movies = (props) => {
    return (
        <div id="movies">
            <ol>
                {props.movies.map((movie, i) => {
                    return <li key={i}>{movie}</li>
                })}
            </ol>
        </div>
    )
}

export default Movies;