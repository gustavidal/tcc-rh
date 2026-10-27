const { executar } = require('../../../utils/procedure.js')
const salvarIndicadorBackend = async function(dados) {
    return await executar('procSalvarIndicadorBackend', dados)
}
module.exports = { salvarIndicadorBackend }
