const express = require('express')

const router = express.Router()

const controller = require('../controllers/departamento_email/controller_departamento_email.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoDepartamentoEmail(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarDepartamentoEmail()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarDepartamentoEmail(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarDepartamentoEmail(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirDepartamentoEmail(req.params.id)
    return responder(res, result)
})

module.exports = router
