const express = require('express')

const router = express.Router()

const controller = require('../controllers/usuario/controller_usuario.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoUsuario(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarUsuario()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarUsuario(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarUsuario(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirUsuario(req.params.id)
    return responder(res, result)
})

module.exports = router
