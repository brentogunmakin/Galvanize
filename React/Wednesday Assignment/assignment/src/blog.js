import React from 'react';


const  Blog = ({posts}) =>{
    return(
        <div id='blog'>
            <ul id='blog-post'>
                {posts}
            </ul>
        </div>
    )

}

export default Blog;