import mongoose from "mongoose"
import AvaliacoesSchema from "./avaliacoes.schema"

const LivroInfoSchema = new mongoose.Schema(
  {
    "livroId": Integer,
    "descricao": String,
    "paginas": Integer,
    "editora": String,
    "avaliacoes": [AvaliacoesSchema]

  }, { collection: "livroInfo" }
)

export default LivroInfoSchema