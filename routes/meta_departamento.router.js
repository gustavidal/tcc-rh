const express = require('express')

const router = express.Router()

const controller = require('../controllers/meta_departamento/controller_meta_departamento.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoMetaDepartamento(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarMetaDepartamento()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarMetaDepartamento(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarMetaDepartamento(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirMetaDepartamento(req.params.id)
    return responder(res, result)
})

module.exports = router
