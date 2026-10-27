const express = require('express')

const router = express.Router()

const controller = require('../controllers/atividade_trabalho/controller_atividade_trabalho.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoAtividadeTrabalho(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarAtividadeTrabalho()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarAtividadeTrabalho(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarAtividadeTrabalho(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirAtividadeTrabalho(req.params.id)
    return responder(res, result)
})

module.exports = router
