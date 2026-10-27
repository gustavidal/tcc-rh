const express = require('express')

const router = express.Router()

const controller = require('../controllers/funcionario_telefone/controller_funcionario_telefone.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoFuncionarioTelefone(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarFuncionarioTelefone()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarFuncionarioTelefone(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarFuncionarioTelefone(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirFuncionarioTelefone(req.params.id)
    return responder(res, result)
})

module.exports = router
