const express = require('express')

const router = express.Router()

const controller = require('../controllers/status_competencia/controller_status_competencia.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoStatusCompetencia(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarStatusCompetencia()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarStatusCompetencia(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarStatusCompetencia(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirStatusCompetencia(req.params.id)
    return responder(res, result)
})

module.exports = router
