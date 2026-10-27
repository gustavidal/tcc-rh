const express = require('express')

const router = express.Router()

const controller = require('../controllers/tipo_telefone/controller_tipo_telefone.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoTipoTelefone(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarTipoTelefone()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarTipoTelefone(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarTipoTelefone(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirTipoTelefone(req.params.id)
    return responder(res, result)
})

module.exports = router
