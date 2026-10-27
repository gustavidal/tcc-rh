const express = require('express')

const router = express.Router()

const controller = require('../controllers/funcionario/controller_funcionario.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoFuncionario(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarFuncionario()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarFuncionario(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarFuncionario(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirFuncionario(req.params.id)
    return responder(res, result)
})

module.exports = router
