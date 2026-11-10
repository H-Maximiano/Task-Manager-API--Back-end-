import express, { Router } from 'express'
import { criarTarefa,deletarTarefas,verTarefas,atualizarTarefa } from '../controllers/tarefasControllers.mjs'
import { verificarSenha } from '../middlewares/middleware.mjs'

const router = express.Router()

router.post('/tarefas',verificarSenha,criarTarefa)
router.get('/lista',verificarSenha,verTarefas)
router.delete('/tarefa/:id',verificarSenha,deletarTarefas)
router.put('/atualizartarefas/:id',verificarSenha,atualizarTarefa)

export default router