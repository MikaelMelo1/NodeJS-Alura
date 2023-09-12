import mongoose from "mongoose";

// esquema / modelo // propriedades
const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
  },
  { versionKey: false } // versionamento do MONGODB
);

const livro = mongoose.model("livros", livroSchema);

export default livro;

// pode usar sem o type para sem validação com typescript pode usar o ?: -> oque indica que não é obrigatório
// const livroSchema = new mongoose.Schema({
//   id: { type: String, required: true },
//   titulo: String,
//   editora: String,
//   preco: Number,
//   paginas: Number,
// });

const testando = new mongoose.Schema({
  id: String,
  nome: String,
});

const testando1 = mongoose.model("testado", testando);
