const express = require('express')

const router = express.Router()

const controller = require('../controllers/funcionario_email/controller_funcionario_email.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoFuncionarioEmail(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarFuncionarioEmail()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarFuncionarioEmail(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarFuncionarioEmail(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirFuncionarioEmail(req.params.id)
    return responder(res, result)
})

module.exports = router
