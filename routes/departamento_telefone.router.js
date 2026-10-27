const express = require('express')

const router = express.Router()

const controller = require('../controllers/departamento_telefone/controller_departamento_telefone.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoDepartamentoTelefone(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarDepartamentoTelefone()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarDepartamentoTelefone(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarDepartamentoTelefone(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirDepartamentoTelefone(req.params.id)
    return responder(res, result)
})

module.exports = router
