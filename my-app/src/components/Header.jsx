
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-900 text-white flex justify-self-start space-x-4 w-full py-4 px-2'>
        <h1 className='font-semibold'>MyBlogApp</h1>
        <ul>
           <Link to="/posts/new">
             <li>New</li>
           </Link>
        </ul>
    </header>
  )
}
