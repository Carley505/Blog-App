
import React from 'react'
import { useParams } from 'react-router-dom'

export default function EditPost() {
  
  const params = useParams()
  const postId = params.postId

  return (
    <div>EditPost</div>
  )
}
