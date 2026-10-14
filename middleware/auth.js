/***************************************************************************************
 * Objetivo: Arquivo responsável pela validação do token de acesso JWT.
 * Autor: Gustavo Vidal de Abreu
 * Data: 12/06/2026 (sexta-feira)
 * Versão: 1.1
*************************************************************************************/

// Import do jsonwebtoken
const jwt = require('jsonwebtoken')

// Função que verifica a autenticação através do token JWT
const autenticar = function (request, response, next) {
    // Requisições OPTIONS (preflight do CORS) não enviam token
    if (request.method === 'OPTIONS')
        return next()

    // Busca o token no header Authorization
    const authorization = request.headers.authorization

    // Validação: token não informado
    if (!authorization)
        return response.status(401).json({
            status: false,
            status_code: 401,
            field: '[TOKEN JWT] não informado, inválido ou expirado.'
        })

    // Aceita tanto "Bearer <token>" quanto apenas "<token>"
    const token = authorization.startsWith('Bearer ') ? authorization.split(' ')[1] : authorization

    try {
        // O segredo deve ser o mesmo utilizado para gerar o token no login
        request.usuario = jwt.verify(token, process.env.JWT_SECRET)

        // Token válido, permite o acesso
        next()
    } catch (error) {
        // Token inválido ou expirado
        return response.status(401).json({
            status: false,
            status_code: 401,
            field: '[TOKEN JWT] não informado, inválido ou expirado.'
        })
    }
}

module.exports = autenticar
