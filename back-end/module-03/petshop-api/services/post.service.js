import PostRepository from "../repositories/post.repository.js";

async function createPost(post) {
  return await PostRepository.createPost(post);
}

async function createComment(post) {
  return await PostRepository.createComment(post);
}

async function getPosts() {
  return await PostRepository.getPosts();
}


export default {
  createPost,
  createComment,
  getPosts
}