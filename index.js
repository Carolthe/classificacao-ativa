import express from "express"
import { MysqlConection } from "./mysqlconection.js"

const app = express()
app.use(express.json())
const port = 3000

// POST serve para pegar os dados do front, neste caso

app.post('/', (req, res) => {
    if (!req.body || !req.body.rating){
        return res.status(400).json({error: "rating não fornecido"})
    }
    const { rating } = req.body
 
    const mysql = new MysqlConection()
    mysql.insert(rating)
    return res.status(201).json({ mensagem: "rating criado com sucesso", rating})
})

app.listen(port, () => {
    console.log(`O servidos está rodando na porta ${port}`)
})