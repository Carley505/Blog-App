import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import "dotenv/config"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import postRouter from "./router/post.router.js"

const app = express()

const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser())

app.use('/api/posts', postRouter)

try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connection Successful...")
} catch (error) {
    console.log(error.message)
}

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}...`)
})

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});