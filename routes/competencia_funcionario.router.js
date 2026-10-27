const express = require('express')

const router = express.Router()

const controller = require('../controllers/competencia_funcionario/controller_competencia_funcionario.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoCompetenciaFuncionario(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarCompetenciaFuncionario()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarCompetenciaFuncionario(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarCompetenciaFuncionario(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirCompetenciaFuncionario(req.params.id)
    return responder(res, result)
})

module.exports = router
