const express = require('express')

const router = express.Router()

const controller = require('../controllers/departamento/controller_departamento.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoDepartamento(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarDepartamento()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarDepartamento(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarDepartamento(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirDepartamento(req.params.id)
    return responder(res, result)
})

module.exports = router
