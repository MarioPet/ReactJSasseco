import React, { useState } from "react";

const Movies = () => {

    const [movies, setMovie] = useState(["Amarcord", "Topsy Turvy", "The Third Man", "The Lady from Shanghai"]);

    const AddMovieToList = () => { setMovie(prevState => [...prevState, "Il Vitelloni"])}
    
    return (
        <div id="movies">
            <button onClick={AddMovieToList}>Add Movie to List</button>
            {movies.map((movie, i) => <h2 key={i}>{movie}</h2>)}
        </div>
    )
}

export default Movies;