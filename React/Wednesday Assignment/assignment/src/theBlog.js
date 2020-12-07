import React from "react";
import BlogPost from './blogpost'
import Blog from './blog'



const TheBlog = (blogPosts) => {

  return (
    <div>
        <Blog posts={
            blogPosts.map(x => {
                return <BlogPost id={x.id} title={x.title} author={x.author} contents={x.contents}/>})

        } />
    </div>

  );
};

export default TheBlog;