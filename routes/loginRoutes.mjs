import express from 'express'
import {cadastro,logar} from '../controllers/loginControllers.mjs'
export const login = express.Router()

login.post('/login/cadastro',cadastro)

login.post ('/login',logar)