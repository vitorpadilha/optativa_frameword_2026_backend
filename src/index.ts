import cors from "cors";
import express from "express";
import { AppDataSource } from "./data-source";
import { Pessoa } from "./entity/Pessoa";

const app = express();

app.use(cors({
  origin: ["http://localhost:5500",
    "http://127.0.1:5500"
  ]
})); // habilita CORS
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado!");

    // Rota POST para criar Pessoa via JSON
    app.post("/pessoas", async (req, res) => {
      try {
        const { nome, idade } = req.body;

        // validação simples
        if (!nome || !idade) {
          return res.status(400).json({ error: "nome e idade são obrigatórios" });
        }

        const pessoa = new Pessoa(nome, idade);
        await AppDataSource.manager.save(pessoa);

        return res.status(201).json({
          message: "Pessoa cadastrada com sucesso",
          pessoa: pessoa
        });

      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao salvar pessoa" });
      }
    });

    app.listen(3000, () => {
      console.log("Servidor rodando em http://localhost:3000");
    });
  })
  .catch((error) => console.log(error));