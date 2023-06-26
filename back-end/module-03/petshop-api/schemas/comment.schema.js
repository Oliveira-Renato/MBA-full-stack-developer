import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    nome: String,
    comentario: String,
  }, { collection: 'posts' }
)

export default CommentSchema;