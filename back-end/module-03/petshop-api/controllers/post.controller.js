
import PostService from "../services/post.service.js";

async function createPost(req, res, next) {
  try {
    let post = req.body;
    if (!post) {
      throw new Error('post é obrigatório!');
    } else {
      res.send(await PostService.createPost(post));
      logger.info(`POST /post - ${JSON.stringify(post)}`);
    }
  } catch (error) {
    next(error)
  }
}

async function createComment(req, res, next) {
  try {
    let post = req.body;
    if (!post._id) {
      throw new Error('_id é obrigatório!');
    } else {
      res.send(await PostService.createComment(post));
      logger.info(`put /comentarios - ${JSON.stringify(post)}`);
    }
  } catch (error) {
    next(error)
  }
}

async function getPosts(req, res, next) {
  try {
    res.send(await PostService.getPosts());
    logger.info(`GET /posts`);
  } catch (error) {
    next(error)
  }
}

export default {
  createPost,
  createComment,
  getPosts
}
