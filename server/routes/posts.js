// Holds all the post routes used in the application
// The logic to be used here is imported from postHandler.js file

import express from "express";
import { getPosts, createPost } from "../controller/postHandler.js";
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;