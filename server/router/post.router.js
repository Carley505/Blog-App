
import express from "express"
import { createPost, deletePost, getPost, getPosts, updatePost } from "../controller/post.controller.js"

const router = express.Router()

router.post('/', createPost)
router.get('/', getPosts)
router.get('/:id', getPost)
router.post('/:id', updatePost)
router.delete('/:id', deletePost)

export default router