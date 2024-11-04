import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import formDate from "../lib/formDate";

import { MdArrowBack } from "react-icons/md";

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
    <div className="max-w-3xl mx-auto p-4">
      {post && (
        <>
          <h2 className="font-bold text-2xl">{post.title}</h2>
          <p className="text-sm text-slate-500 font-semibold">{formDate(post.createdAt)}</p>
          <div className="my-2 flex gap-2">
            {post.tags && post.tags.map((tag) => <span className="font-semibold text-slate-600 rounded-full bg-slate-200 py-[1px] px-2" key={tag}>{tag}</span>)}
          </div>
          <div className="my-4">
             <p className="">{post.content}</p>
             <p className="text-slate-600">{'- '}{post.author}</p>
          </div>
          <div className="flex flex-row gap-4 text-white">
            <Link to={`/posts/${post._id}/edit`} className="bg-sky-700 w-24 py-2 text-center rounded-md hover:opacity-95">Edit</Link>
            <button onClick={()=>handleDelete(postId)} type="button" className="bg-red-700 w-24 py-2 rounded-md hover:opacity-95">Delete</button>
          </div>
          <Link to="/" className="text-sky-700 flex items-center mt-2 gap-1">
           <MdArrowBack/>
           <span>Back Home</span>
          </Link>
        </>
      )}
    </div>
  );
}
