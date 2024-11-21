import express from "express";
import { createPost, getPosts} from "../controllers/postController.js"; 

const router = express.Router();

router.route("/").post(createPost);

router.route("/").get(getPosts);

export default router;