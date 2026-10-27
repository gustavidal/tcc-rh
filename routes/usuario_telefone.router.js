const express = require('express')

const router = express.Router()

const controller = require('../controllers/usuario_telefone/controller_usuario_telefone.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoUsuarioTelefone(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarUsuarioTelefone()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarUsuarioTelefone(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarUsuarioTelefone(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirUsuarioTelefone(req.params.id)
    return responder(res, result)
})

module.exports = router
