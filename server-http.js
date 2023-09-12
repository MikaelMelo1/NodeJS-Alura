// import http from "http"; //nativo
import "dotenv/config";
import app from "./src/app.js ";

const PORT = 8080; //porta que vai funcionar o servidor

app.listen(PORT, () => {
  console.log("servidor escutando");
});
