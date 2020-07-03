import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchWithHooks = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(res => setComments(res.data))
            .catch(err => console.error(err));
    }, [])

    return (
        <div id="fetch-hooks">
            <h2>Comments will load here...</h2>
            <hr />
            {comments.length < 0 ? <h2>Loading Comments...</h2> :
                <ul>
                    {comments.map(comment => {
                        return <li key={comment.id}>{comment.name}</li>
                    })}
                </ul>}
        </div>
    )
}

export default FetchWithHooks;