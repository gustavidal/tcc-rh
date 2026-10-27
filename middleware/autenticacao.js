const jwt = require('jsonwebtoken')
const autenticacao = (req, res, next) => {
    try {
        const authorization = req.headers.authorization || ''
        if (!authorization.startsWith('Bearer ')) return res.status(401).json({ message: 'Token não informado' })
        const usuario = jwt.verify(authorization.slice(7), process.env.JWT_SECRET, { algorithms: ['HS256'] })
        if (!Number.isInteger(usuario.id_usuario) || usuario.id_usuario <= 0) return res.status(401).json({message:'Token inválido'})
        req.usuario = usuario
        next()
    } catch (error) { return res.status(401).json({ message: 'Token inválido ou expirado' }) }
}
module.exports = autenticacao
