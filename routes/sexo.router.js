const express = require('express')

const router = express.Router()

const controller = require('../controllers/sexo/controller_sexo.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoSexo(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarSexo()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarSexo(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarSexo(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirSexo(req.params.id)
    return responder(res, result)
})

module.exports = router
