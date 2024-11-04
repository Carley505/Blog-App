import React, { useState } from "react";
import demoImage from "../../public/demo.png";
import { Link } from "react-router-dom";
import formDate from "../lib/formDate";

export default function Home() {
  const [posts, setPosts] = useState(null);

  useState(() => {
    const url = "/api/posts/";
    const fetchPosts = async () => {
      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.success === false) {
            console.log(data.message);
          } else {
            setPosts(data.data);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center mt-6 border-b-2 border-slate-500 pb-4">
          <img
            className="h-20 w-20 object-cover rounded-full"
            src={demoImage}
            alt="image"
          />
          <h2 className="font-semibold">Welcome to digital Marketing Blog.</h2>
        </div>
        <div>
          {posts &&
            posts.map((post) => {
              return (
                <div key={post._id}>
                  <Link className="text-sky-600 font-bold hover:underline" to={`/posts/${post._id}`}>{post.title}</Link>
                  <p>
                    <span className="font-semibold">{post.author}</span>
                    {" - "}
                    <span className="text-sm font-semibold text-slate-500">
                      { formDate(post.createdAt) }
                    </span>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
