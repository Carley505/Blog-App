import Post from "../model/post.model.js";
import { errorHandler } from "../utils/error.js"

export const createPost = async(req, res, next) =>{

    try {
        const post = await Post.create(req.body)
        return res.status(201).json(post)
    } catch (error) {
        next(error)
    }
}

// get posts
export const getPosts = async(req, res, next) =>{
    try {
        const posts = await Post.find().sort({ createdAt: 'desc' })
        if(!posts) return next(errorHandler(404, "No Posts Found!"))
        res.status(201).json({
          statusCode: 201,
          message: "Fetched all posts.",
          data: posts,
        })
    } catch (error) {
        next(error)
    }
}

// get Single Post

export const getPost = async(req, res, next) =>{
    try {
        const post = await Post.findById(req.params.id)
        if(!post) return next(errorHandler(404, "Post Not Found!"))
        res.status(200).json({
          statusCode: 200,
          message: "Fetched Post.",
          data: post,
        })
    } catch (error) {
        next(error)
    }
}

export const updatePost = async(req, res, next) =>{
    const { title, content, author, tags } = req.body
    const postId = req.params.id
    try {
        const updatedPost = await Post.findByIdAndUpdate(postId,
            {
                $set: {
                    title,
                    content,
                    author,
                    tags,
                }
            },
            { new: true }
        );
        if(!updatePost) return next(401, "Faild to update!")
        res.status(200).json({
         statusCode: 200,
         message: "Updated Post",
         data: updatedPost,
        })
    } catch (error) {
        next(error)
    }
}

export const deletePost = async(req, res, next) =>{
    const postId = req.params.id
    try {
        const deletedPost = await Post.findByIdAndDelete(postId)
        res.status(200).json({
            statusCode: 200,
            message: `Deleted post.`,
            data: {}
        })
    } catch (error) {
        next(error)
    }
}