import React from 'react';

const BlogPost = ({ id , author , title , contents }) => {
    return(
        <li id={`blog-posts-${id}`}>
            <h1>{title}</h1>
            <h4>Written by: {author}</h4>
            <p>{contents}</p>
        </li>
    )
}

export default BlogPost;