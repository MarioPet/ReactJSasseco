import React from "react";

const List = (props) => {
    const { posts } = props;

    if (!posts) return null;
    if (!posts.length) return <h2>There are no posts to show.</h2>

    return posts.map(post => <h3 key={post.id}>{post.title}</h3>)
}

export default List;