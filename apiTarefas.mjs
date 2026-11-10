import express, { json } from 'express'
import cors from 'cors'
import { login } from './routes/loginRoutes.mjs'
import rotaDasTarefas from './routes/tarefasRoutes.mjs'
import {manipuladorDeErros} from './middlewares/middleware.mjs'

const app = express()

// 1. Configurações globais e parsers (sempre primeiro)
app.use(json())
app.use(cors())

app.use(login)
app.use(rotaDasTarefas)

app.use(manipuladorDeErros)

app.listen(3000, () => {
    console.log('rodando na porta http://localhost:3000/lista')
})
