import { ObjectId } from 'mongodb';
import { getClient } from '../database/mongo.db.js';

/*creating post on mongoDB*/
async function createPost(post) {
  const client = getClient();
  try {
    await client.connect();
    await client.db('petshop').collection('posts').insertOne(post);
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function createComment(post) {
  const client = getClient();
  try {
    await client.connect();
    await client.db('petshop').collection('posts').updateOne(
      { _id: new ObjectId(post._id) },
      { $push: { comentarios: { $each: post.comentarios } } }
    );
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function getPosts() {
  const client = getClient();
  try {
    await client.connect();
    return await client.db('petshop').collection('posts').find().toArray();
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

export default {
  createPost,
  createComment,
  getPosts
}
