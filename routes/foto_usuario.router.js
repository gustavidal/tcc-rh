const express = require('express')

const router = express.Router()

const controller = require('../controllers/foto_usuario/controller_foto_usuario.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoFotoUsuario(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarFotoUsuario()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarFotoUsuario(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarFotoUsuario(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirFotoUsuario(req.params.id)
    return responder(res, result)
})

module.exports = router
