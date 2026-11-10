import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'
import {z} from 'zod'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();
const moldeUsuario = z.object({
    email: z.string().email({message:"email no formato errado"}),
    senha: z.string().min(6,{message: "A senha precisa ter no mínimo 6 caracteres"})
})



 export async function cadastro  (req,res){
   
   
   try {
     const dadosVerificados = moldeUsuario.parse(req.body)

    const senhaCriptografada = await bcrypt.hash(dadosVerificados.senha,10)
    const cadastrar = await prisma.usuario.create({
        data: {
            email: dadosVerificados.email,
            senha: senhaCriptografada
        }
    })
    res.status(201).json('e daqui ')
   } catch (error) {
        res.status(400).json({messagem:error.flatten()})
   } 
}

export async function logar (req,res) {
    const email = req.body.email
    const senha = req.body.senha
    

   
    const usuario = await prisma.usuario.findUnique({
        where: {
            email: email
        }
    })
    if (usuario) {
        const senhaBateu = await bcrypt.compare(senha,usuario.senha)

        if (senhaBateu) {
         const token = jwt.sign({id:usuario.id},'senhadobeck',{expiresIn:'1h'})
         res.status(200).json({token})
    }else{
        res.status(401).json({mensagem:'Usuario ou senha nao encontrados'})
    }
        
    }else{
        res.status(401).json({mensagem:"Usuario ou senha nao encontrados"})
    }
    
}

