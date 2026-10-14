// Import do jsonwebtoken
const jwt = require('jsonwebtoken')

// Middleware que valida o token JWT enviado no header Authorization (Bearer)
function verificarJWT(request, response, next) {
    // Requisições OPTIONS (preflight do CORS) não enviam token
    if (request.method === 'OPTIONS')
        return next()

    let authorization = request.headers['authorization']

    if (!authorization || !authorization.startsWith('Bearer '))
        return response.status(401).json({ status: false, status_code: 401, message: 'Token não informado.' })

    let token = authorization.split(' ')[1]

    try {
        // O segredo deve ser o mesmo utilizado para gerar o token no login
        request.usuario = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (error) {
        return response.status(401).json({ status: false, status_code: 401, message: 'Token inválido ou expirado.' })
    }
}

module.exports = verificarJWT
