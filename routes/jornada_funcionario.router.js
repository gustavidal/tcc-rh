const express = require('express')

const router = express.Router()

const controller = require('../controllers/jornada_funcionario/controller_jornada_funcionario.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoJornadaFuncionario(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarJornadaFuncionario()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarJornadaFuncionario(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarJornadaFuncionario(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirJornadaFuncionario(req.params.id)
    return responder(res, result)
})

module.exports = router
