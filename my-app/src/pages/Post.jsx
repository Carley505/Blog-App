import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import formDate from "../lib/formDate";

export default function Post() {
  const [post, setPost] = useState(null);

  const navigate = useNavigate()
  const params = useParams();
  const postId = params.postId;


  const handleDelete = async(id) =>{
    const url = `/api/posts/${id}`
    await fetch(url, {
      method: "DELETE",
    }).then((response)=>{
      return response.json()
    }).then((data)=>{
      if(data.success === false){
        console.log(data.message)
        return
      }else{
        console.log(data)
        navigate("/")
      }
    }).catch((error)=>{
      console.log(error.message)
    })
  }

  useEffect(() => {
    const url = `/api/posts/${postId}`;
    const fetchPost = async () => {
      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.success === false) {
            console.log(data.message);
            return;
          } else {
            setPost(data.data);
          }
        });
    };
    fetchPost();
  }, [postId]);

  return (
    <div className="max-w-3xl mx-auto">
      {post && (
        <>
          <h2 className="font-bold text-2xl">{post.title}</h2>
          <p className="">{formDate(post.createdAt)}</p>
          <div>
            {post.tags && post.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <p>{post.content}</p>
          <p>{post.author}</p>
          <div className="flex flex-row gap-4 text-white">
            <Link to={`/posts/${post._id}/edit`} className="bg-sky-700 w-24 py-2 text-center rounded-md hover:opacity-95">Edit</Link>
            <button onClick={()=>handleDelete(post._id)} type="button" className="bg-red-700 w-24 py-2 rounded-md hover:opacity-95">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
