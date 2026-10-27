const express = require('express')

const router = express.Router()

const controller = require('../controllers/cargo/controller_cargo.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoCargo(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarCargo()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarCargo(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarCargo(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirCargo(req.params.id)
    return responder(res, result)
})

module.exports = router
