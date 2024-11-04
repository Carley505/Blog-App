import React, { useState } from "react";

export default function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    author: "",
    tag: "biography",
  });

  console.log(post);

  const handleChange = async (e) => {
    if (e.target.type === "text" || e.target.type === "textarea") {
      setPost({
        ...post,
        [e.target.id]: e.target.value,
      });
    }

    if (e.target.type === "radio") {   
      setPost({
        ...post,
        tag: e.target.id
      });
    }
  };
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-center my-4 font-semibold text-3xl">Create Post</h2>
      <form className="space-y-4">
        <input
          className="border w-full rounded-md p-2 focus:outline-none"
          id="title"
          placeholder="Title"
          value={post.title}
          onChange={handleChange}
        />
        <textarea
          id="content"
          rows={3}
          className="border w-full rounded-md p-2 focus:outline-none"
          placeholder="Content"
          value={post.content}
          onChange={handleChange}
        ></textarea>
        <input
          className="border w-full rounded-md p-2 focus:outline-none"
          id="author"
          placeholder="Author"
          value={post.author}
          onChange={handleChange}
        />
        <p>Tag</p>
        <div className="flex gap-4 flex-wrap">
          {["adventure", "history", "biography", "action", "fantasy"].map(
            (tag) => {
              return (
                <div
                  className="flex items-center gap-1 whitespace-nowrap"
                  key={tag}
                >
                  <input 
                   className="h-5 w-5" 
                   type="radio" 
                   name="tag"
                   id={tag}
                   value={post.tag}
                   checked={post.tag === tag}
                   onChange={handleChange}
                   />
                  <span>{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
                </div>
              );
            }
          )}
        </div>
        <button className="w-full bg-green-700 rounded-md text-white py-2 hover:opacity-95">
          Create Post
        </button>
      </form>
    </div>
  );
}
