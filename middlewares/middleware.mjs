import jwt from 'jsonwebtoken'

export function logRequisicao(req,res,next) {
   
    next()
}

export function verificarSenha(req,res,next) {
    console.log("Token que chegou no backend:", req.headers.senha)
    try {
        
    const dadosDaPulseira = jwt.verify(req.headers.senha,'senhadobeck') 
    req.usuarioId = dadosDaPulseira.id 
        next()
        
        
    } catch (error) {
       console.log("Motivo do bloqueio:", error.message);
    }

    
}

export function manipuladorDeErros(err, req, res, next) {
    console.error(err)
   res.status(500).json({erro:'Erro interno no servidor'})
}