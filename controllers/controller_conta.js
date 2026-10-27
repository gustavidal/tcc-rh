const bcrypt = require('bcrypt')
const { executar, knexConection } = require('../utils/procedure.js')
const responderErro = (res, error) => res.status(500).json({ message: 'Erro interno na controller' })
const senha = async function (req,res) {
    try {
        const {senha_atual,senha_nova} = req.body
        if (typeof senha_nova !== 'string' || senha_nova.length < 8 || typeof senha_atual !== 'string') return res.status(400).json({message:'Senha atual e nova senha de no mínimo 8 caracteres são obrigatórias'})
        const atual = await executar('procUsuarioLogin',{operacao:'SELECT_BY_EMAIL_LOGIN',email_login_param:req.usuario.email})
        if (!atual[0] || Number(atual[0].id_usuario) !== req.usuario.id_usuario || !await bcrypt.compare(senha_atual,atual[0].senha_hash)) return res.status(403).json({message:'Senha atual incorreta'})
        const hash = await bcrypt.hash(senha_nova,12)
        const data = await executar('procUsuarioLogin',{operacao:'UPDATE_SENHA',senha_hash_param:hash,id_param:atual[0].id})
        return res.json({data})
    } catch(error) { return responderErro(res,error) }
}
const email = async function (req,res) {
    try {
        const {email_novo,senha_atual} = req.body
        if (typeof email_novo !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_novo) || typeof senha_atual !== 'string') return res.status(400).json({message:'Email ou senha inválida'})
        const atual = await executar('procUsuarioLogin',{operacao:'SELECT_BY_EMAIL_LOGIN',email_login_param:req.usuario.email})
        if (!atual[0] || Number(atual[0].id_usuario) !== req.usuario.id_usuario || !await bcrypt.compare(senha_atual,atual[0].senha_hash)) return res.status(403).json({message:'Senha incorreta'})
        const data = await executar('procUsuarioLogin',{operacao:'UPDATE_EMAIL',email_login_param:email_novo,id_param:atual[0].id})
        return res.json({data, message:'Faça login novamente com o novo e-mail'})
    } catch(error) { return responderErro(res,error) }
}
const perfil = async function (req,res) {
    try {
        const {nome_param,data_nascimento_param,id_foto_usuario_param} = req.body
        if (!nome_param || !data_nascimento_param || !Number.isInteger(Number(id_foto_usuario_param))) return res.status(400).json({message:'Dados obrigatórios: nome, nascimento e foto'})
        const data = await executar('procUsuario',{operacao:'UPDATE',id_param:req.usuario.id_usuario,nome_param,data_nascimento_param,id_foto_usuario_param})
        return res.json({data})
    } catch(error) { return responderErro(res,error) }
}
const criarConta = async function (req,res) {
    try {
        if (req.usuario.perfil !== 'administrativo') return res.status(403).json({message:'Somente RH pode criar contas'})
        const {nome_param,data_nascimento_param,id_foto_usuario_param,email,senha,perfil} = req.body
        if (!nome_param || !data_nascimento_param || !Number.isInteger(Number(id_foto_usuario_param)) || !email || typeof senha !== 'string' || senha.length < 8 || !['gestor','administrativo'].includes(perfil)) return res.status(400).json({message:'Informe nome, nascimento, foto, email, senha e perfil válido'})
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({message:'Email inválido'})
        const hash = await bcrypt.hash(senha,12)
        const result = await knexConection.transaction(async transaction => {
            const usuario = await executar('procUsuario',{operacao:'INSERT',nome_param,data_nascimento_param,id_foto_usuario_param},transaction)
            const idUsuario = Number(usuario[0]?.id)
            if (!Number.isInteger(idUsuario) || idUsuario <= 0) throw new Error('Não foi possível criar usuário')
            const login = await executar('procUsuarioLogin',{operacao:'INSERT',email_login_param:email,senha_hash_param:hash,id_usuario_param:idUsuario},transaction)
            if (!login[0]?.id) throw new Error('Não foi possível criar credencial')
            const papel = perfil === 'gestor' ? 'procGestor' : 'procAdministrativo'
            const vinculo = await executar(papel,{operacao:'INSERT',id_usuario_param:idUsuario},transaction)
            if (!vinculo[0]?.id) throw new Error('Não foi possível criar vínculo')
            return {id_usuario:idUsuario,id_login:login[0].id,perfil}
        })
        return res.status(201).json({data:result})
    } catch(error) { return responderErro(res,error) }
}
module.exports = { senha,email,perfil,criarConta }
