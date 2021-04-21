import express from "express";

import "./database";

const app = express();


app.get("/", (request, response) => {
  return response.json({
    message: "Olá Ace"
  });
});

app.post("/post", (request, response) => {
  return response.json({
    message: "Usuário salvo com sucesso meu caro"
  });
});

app.listen(3333, () => {
  console.log("Server is running on port 3333")
});

