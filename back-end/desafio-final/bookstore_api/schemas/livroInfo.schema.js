import mongoose from "mongoose"
import AvaliacoesSchema from "./avaliacoes.schema.js"

const LivroInfoSchema = new mongoose.Schema(
  {
    "livroId": Number,
    "descricao": String,
    "paginas": Number,
    "editora": String,
    "avaliacoes": [AvaliacoesSchema]

  }, { collection: "bookstore" }
)

export default LivroInfoSchema