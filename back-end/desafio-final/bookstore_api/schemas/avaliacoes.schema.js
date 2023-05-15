import mongoose from "mongoose"

const AvaliacoesSchema = new mongoose.Schema(
  {
    "nome": String,
    "nota": Number,
    "avaliacao": String
  }, { collection: "bookstore" }
)

export default AvaliacoesSchema