
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Post from './pages/Post'
import Header from './components/Header'
import { SearchPosts } from './pages/SearchPosts'

export default function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<SearchPosts/>} />
        <Route path='/posts/new' element={<CreatePost/>} />
        <Route path='/posts/:postId' element={<Post/>} />
        <Route path='/posts/:postId/edit' element={<EditPost/>} />
      </Routes>
    </BrowserRouter>
  )
}
