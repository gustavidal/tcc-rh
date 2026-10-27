const service = require('../services/service_indicadores.js')
const filtrosPermitidos = ['id_funcionario_param','id_departamento_param','data_inicio_param','data_fim_param']
const resumo = async function (req,res) {
    try {
        if (Object.keys(req.query).some(chave => !filtrosPermitidos.includes(chave))) return res.status(400).json({message:'Filtro não permitido'})
        for(const chave of ['id_funcionario_param','id_departamento_param']) {
            if (req.query[chave] !== undefined && (!Number.isSafeInteger(Number(req.query[chave])) || Number(req.query[chave]) <= 0)) return res.status(400).json({message:'ID inválido: '+chave})
        }
        for(const chave of ['data_inicio_param','data_fim_param']) {
            if (req.query[chave] !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(req.query[chave])) return res.status(400).json({message:'Data inválida: '+chave})
        }
        const dados = await service.consultarDados(req.usuario,req.query)
        return res.json({...service.calcular(dados), dados})
    } catch(error) {
        console.error(error)
        return res.status(500).json({message:'Falha ao carregar indicadores'})
    }
}
const salvar = async function(req,res) {
    try {
        const dados = req.body || {}
        const campos = ['id_funcionario_param','semana_param','indice_sobrecarga_param','desempenho_medio_param']
        if (Object.keys(dados).some(chave => !campos.includes(chave))) return res.status(400).json({message:'Parâmetro não permitido'})
        if (!Number.isSafeInteger(Number(dados.id_funcionario_param)) || Number(dados.id_funcionario_param) <= 0) return res.status(400).json({message:'Funcionário inválido'})
        if (typeof dados.semana_param !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(dados.semana_param) || Number.isNaN(Date.parse(dados.semana_param)) || new Date(dados.semana_param).toISOString().slice(0,10) !== dados.semana_param) return res.status(400).json({message:'Semana inválida'})
        for (const campo of ['indice_sobrecarga_param','desempenho_medio_param']) {
            if (dados[campo] !== null && dados[campo] !== undefined && (typeof dados[campo] !== 'number' || !Number.isFinite(dados[campo]) || dados[campo] < 0)) return res.status(400).json({message:'Valor inválido: '+campo})
        }
        if (dados.indice_sobrecarga_param === undefined && dados.desempenho_medio_param === undefined) return res.status(400).json({message:'Envie ao menos um indicador'})
        if (dados.desempenho_medio_param !== null && dados.desempenho_medio_param !== undefined && dados.desempenho_medio_param > 10) return res.status(400).json({message:'Desempenho deve estar entre 0 e 10'})
        const { executar } = require('../utils/procedure.js')
        const resultado = await executar('procSalvarIndicadorBackend', {
            id_usuario_param: req.usuario.id_usuario,
            id_funcionario_param: Number(dados.id_funcionario_param),
            semana_param: dados.semana_param,
            indice_sobrecarga_param: dados.indice_sobrecarga_param ?? null,
            desempenho_medio_param: dados.desempenho_medio_param ?? null
        })
        return res.status(200).json({data:resultado})
    } catch(error) {
        console.error(error)
        return res.status(error.sqlState === '45000' ? 403 : 500).json({message:error.sqlState === '45000' ? error.sqlMessage : 'Erro ao salvar indicador'})
    }
}
module.exports = {resumo, salvar}
