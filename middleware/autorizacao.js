const { executar } = require('../utils/procedure.js')
module.exports = async function (req,res,next) {
    try {
        // Revalida permissão do usuário a cada requisição; apenas administrativo ou gestor.
        const [administrativos, gestores] = await Promise.all([
            executar('procAdministrativo',{operacao:'SELECT_BY_USUARIO',id_usuario_param:req.usuario.id_usuario}),
            executar('procGestor',{operacao:'SELECT_BY_USUARIO',id_usuario_param:req.usuario.id_usuario})
        ])
        if (!administrativos.length && !gestores.length) return res.status(403).json({message:'Acesso restrito a gestor e RH'})
        req.usuario.perfil = administrativos.length ? 'administrativo' : 'gestor'
        next()
    } catch(error) { console.error(error); return res.status(500).json({message:'Falha ao verificar permissão'}) }
}
