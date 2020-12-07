import React from "react";
import TheBlog from "./theBlog";

const blogPosts = [
  {
    id: 1,
    title: "Window management got you down?",
    author: "Brandon",
    contents:
      " in the days of online classes, having your windows situated is more important than ever",
  },
  {
    id: 2,
    title: "Keep the aloe handy in case your cat is not feeling dandy",
    author: "Dylan",
    contents: " keep him fed",
  },
  {
    id: 3,
    title: "You are muted.",
    author: "Jon",
    contents: "a/v is my favorite",
  },
];

function Body() {
  return (
    <div>
      <TheBlog blogPosts/>
    </div>
  );
}

export default Body;
