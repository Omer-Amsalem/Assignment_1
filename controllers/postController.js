import Post from "../models/postModel.js"; 
import asyncRest from "express-async-handler";

const createPost = asyncRest(async (req, res) => {
  const { message, sender } = req.body;
  if (!message || !sender) {
    res.status(400);
    throw new Error("Required to enter message and sender.");
  }

  const newPost = await Post.create({
    message,
    sender,
  });
  res.json({
    success: true,
    post: newPost,
  });
});

const getPosts = asyncRest(async (req, res) => {
  const posts = await Post.find({});
  res.json({
    success: true,
    posts,
  });
});


export { createPost, getPosts };