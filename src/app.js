import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase();

//capta algum erro
conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

//verifica se está OK a conexão
conexao.once("open", () => {
  console.log("Conexão estabelecida");
});

const app = express();
routes(app);

//exportado o app
export default app;
