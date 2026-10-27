const express = require('express')

const router = express.Router()

const controller = require('../controllers/funcionario_departamento/controller_funcionario_departamento.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoFuncionarioDepartamento(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarFuncionarioDepartamento()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarFuncionarioDepartamento(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarFuncionarioDepartamento(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirFuncionarioDepartamento(req.params.id)
    return responder(res, result)
})

module.exports = router
