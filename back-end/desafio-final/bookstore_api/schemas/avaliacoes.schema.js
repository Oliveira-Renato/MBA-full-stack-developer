import mongoose from "mongoose"

const AvaliacoesSchema = new mongoose.Schema(
  {
    "nome": String,
    "nota": Integer,
    "avaliacao": String
  }, { collection: "livroInfo" }
)

export default AvaliacoesSchema