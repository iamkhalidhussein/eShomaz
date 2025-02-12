import express from 'express';
const router = express.Router();
import { createPost, getAllPosts, getPosts, incrementLikes } from '../controllers/post-controller';

router.post('/create-post', createPost);
router.get('/get-posts/:email', getPosts);
router.get('/get-all-posts', getAllPosts);
router.post('/increment-likes/:email/:postid', incrementLikes);

export default router;