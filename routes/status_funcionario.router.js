const express = require('express')

const router = express.Router()

const controller = require('../controllers/status_funcionario/controller_status_funcionario.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoStatusFuncionario(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarStatusFuncionario()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarStatusFuncionario(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarStatusFuncionario(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirStatusFuncionario(req.params.id)
    return responder(res, result)
})

module.exports = router
