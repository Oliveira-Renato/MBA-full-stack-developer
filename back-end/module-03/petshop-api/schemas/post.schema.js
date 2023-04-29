import mongoose from "mongoose";
import CommentSchema from "./comment.schema.js";

const PostSchema = new mongoose.Schema(
  {
    titulo: String,
    conteudo: String,
    comentarios: [CommentSchema]
  }, { collection: 'posts' }
)

export default PostSchema;