import React from "react";
import PostCard from "@/src/components/PostCard";
import "@/src/app/posts/Post.css"

const loadPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return data;
};

//React server component
const PostPage = async () => {
  const posts = await loadPosts();
  console.log(posts);
  return (
    <div className="grid">
      {posts.map((el) => (
        <PostCard el={el} key={el.id} />
      ))}
    </div>
  );
};

export default PostPage;
