import express from 'express';
import PostController from '../controllers/post.controller.js';

const router = express.Router();

router.get('/', PostController.getPosts);
router.post('/', PostController.createPost);
router.put('/comentarios', PostController.createComment);


export default router;