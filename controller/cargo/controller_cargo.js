//Import do arquivo de configurações de mensagens do projeto
const configMessages = require('../modulo/configMessages.js')

// Import das funções globais
const validarDados = require('../../utils/validar_dados/validar_dados.js')

const validarDadosCargo = function (dados) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))
    let validar = validarDados.validarDados(contatoEmergenciaSchema, dados, customMessages)

    return validar
}