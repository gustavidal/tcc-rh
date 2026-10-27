const express = require('express')

const router = express.Router()

const controller = require('../controllers/tipo_competencia/controller_tipo_competencia.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoTipoCompetencia(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarTipoCompetencia()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarTipoCompetencia(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarTipoCompetencia(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirTipoCompetencia(req.params.id)
    return responder(res, result)
})

module.exports = router
