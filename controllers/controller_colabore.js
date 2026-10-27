const jwt = require('jsonwebtoken')
const service = require('../services/service_colabore.js')
const contratos = require('../utils/validacao_recurso.js').contratos
const telas = require('../utils/telas.js')
const login = async function (req, res) {
    try {
        if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) return res.status(503).json({message:'Configure JWT_SECRET com no mínimo 32 caracteres'})
        const usuario = await service.validarSenha(req.body.email, req.body.senha)
        if (!usuario) return res.status(401).json({message:'E-mail ou senha inválidos'})
        const token = jwt.sign(usuario, process.env.JWT_SECRET, { expiresIn: '8h', algorithm: 'HS256' })
        return res.status(200).json({token, usuario: {id_usuario:usuario.id_usuario,email:usuario.email}})
    } catch(error) { console.error(error); return res.status(500).json({message:'Erro no login'}) }
}
const consultarTela = async function (req, res) {
    try {
        const tela = telas[req.params.tela]
        if (!tela || !tela.operacoes.includes(req.params.operacao)) return res.status(404).json({message:'Consulta não disponível'})
        if (['relatorios-legados'].includes(req.params.tela) || (req.params.tela === 'alertas' && req.params.operacao !== 'AVALIACOES_PENDENTES')) return res.status(410).json({message:'Indicadores legados desativados; use /indicadores/resumo e /telas/relatorios/... com dados brutos'})
        const dados = {}
        for(const parametro of contratos[tela.procedure]) {
            if (parametro === 'id_usuario_param') dados[parametro] = req.usuario.id_usuario
            else if(parametro !== 'operacao' && req.query[parametro] !== undefined) dados[parametro] = req.query[parametro]
        }
        const result = await service.consultar(tela.procedure, req.params.operacao, dados)
        return res.status(200).json({data:result})
    } catch(error) { console.error(error); return res.status(500).json({message:'Falha na consulta'}) }
}
module.exports = { login, consultarTela }
