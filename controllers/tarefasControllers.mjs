import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function criarTarefa  (req, res, next) {
    const novaTarefa = req.body
    try{
        if (!novaTarefa.nome) {
            return res.status(400).json({ erro: 'O nome da tarefa é obrigatório' })
        }
        console.log("ID que chegou na rota POST:", req.usuarioId)
        const tarefa = await prisma.tarefa.create({
            data: {
            nome: novaTarefa.nome,
            usuarioId: req.usuarioId
        }
    })
    res.status(201).json({ mensagem: 'tarefa add', ...tarefa })}catch (error) {
        next(error) 
    }
    
}

export async function verTarefas(req, res, next) {
    try {
        const tarefas = await prisma.tarefa.findMany({
            where: {
                usuarioId: req.usuarioId
            }
        })
        res.status(200).json(tarefas)
    } catch (error) {
        next(error)
    }
}

export async function deletarTarefas(req,res, next) {
    const tarefaPDeletar = req.params.id
    try {
        const tarefa = await prisma.tarefa.delete({
            where: {
                id: parseInt(tarefaPDeletar),
                usuarioId: req.usuarioId
            }
        })
        res.status(200).json({ mensagem: 'tarefa deletada com sucesso', ...tarefa })
    } catch (error) {
        next(error)
    }           
}

export async function atualizarTarefa(req, res, next) {
    const tarefaPAtualizar = req.params.id
    try {
        const tarefa = await prisma.tarefa.update({
            where: {
                id: parseInt(tarefaPAtualizar),
                usuarioId: req.usuarioId
            },
            data: req.body
        })
        res.status(200).json({ mensagem: 'tarefa atualizada com sucesso', ...tarefa })
    } catch (error) {
        next(error)
    }
}