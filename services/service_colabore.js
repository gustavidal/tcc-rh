const bcrypt = require('bcrypt')
const { executar } = require('../utils/procedure.js')
const contratos = require('../utils/validacao_recurso.js').contratos
const consultar = async function (nome, operacao, dados = {}) {
    if (!contratos[nome]) throw new Error('Recurso desconhecido')
    return await executar(nome, { ...dados, operacao })
}
const validarSenha = async function (email, senha) {
    if (typeof email !== 'string' || typeof senha !== 'string' || !email || !senha) return null
    const usuarios = await executar('procUsuarioLogin', { operacao: 'SELECT_BY_EMAIL_LOGIN', email_login_param: email })
    const usuario = usuarios[0]
    if (!usuario || !usuario.senha_hash || !(await bcrypt.compare(senha, usuario.senha_hash))) return null
    return { id_usuario: Number(usuario.id_usuario), id_login: Number(usuario.id), email: usuario.email_login }
}
module.exports = { consultar, validarSenha }
