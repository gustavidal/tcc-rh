const express = require('express')

const router = express.Router()

const controller = require('../controllers/meta_organizacional_funcionario/controller_meta_organizacional_funcionario.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoMetaOrganizacionalFuncionario(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarMetaOrganizacionalFuncionario()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarMetaOrganizacionalFuncionario(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarMetaOrganizacionalFuncionario(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirMetaOrganizacionalFuncionario(req.params.id)
    return responder(res, result)
})

module.exports = router
