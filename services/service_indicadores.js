const fontes = ['COLABORADORES','AVALIACOES','NOTAS_COMPETENCIAS','METAS','PROGRESSO_METAS','ATIVIDADES','HORAS','JORNADA','COMPETENCIAS_VINCULADAS','PARAMETROS']
const consultarDados = async function (usuario, filtros = {}) {
    const dados = {
        id_usuario_param: usuario.id_usuario,
        id_funcionario_param: filtros.id_funcionario_param || null,
        id_departamento_param: filtros.id_departamento_param || null,
        data_inicio_param: filtros.data_inicio_param || null,
        data_fim_param: filtros.data_fim_param || null
    }
    const { executar } = require('../utils/procedure.js')
    const resultados = await Promise.all(fontes.map(operacao => executar('procDadosIndicadoresBackend', {...dados, operacao})))
    return Object.fromEntries(fontes.map((nome, indice) => [nome.toLowerCase(), resultados[indice]]))
}
const numero = valor => valor === null || valor === undefined || valor === '' ? null : Number(valor)
const media = valores => valores.length ? Math.round(valores.reduce((a,b) => a+b, 0) / valores.length * 100) / 100 : null
const calcular = function (registros) {
    const colaboradores = [...new Map(registros.colaboradores.map(c => [Number(c.id_funcionario), c])).values()]
    const avaliacoes = [...new Map(registros.avaliacoes.map(a => [Number(a.id_avaliacao), a])).values()]
    const metas = [...new Map(registros.metas.map(m => [Number(m.id_meta), m])).values()]
    const desempenho = avaliacoes.filter(a => String(a.status).toLowerCase() === 'concluida' && numero(a.nota) !== null)
    const pendentes = avaliacoes.filter(a => String(a.status).toLowerCase() === 'pendente')
    const emAndamento = metas.filter(m => ['em andamento','andamento'].includes(String(m.status_meta).toLowerCase()))
    const concluidas = metas.filter(m => ['concluida','concluída'].includes(String(m.status_meta).toLowerCase()))
    const atrasadas = metas.filter(m => m.prazo && new Date(m.prazo) < new Date() && !['concluida','concluída'].includes(String(m.status_meta).toLowerCase()))
    const indicadores = {
        total_colaboradores: colaboradores.length,
        avaliacoes_pendentes: pendentes.length,
        desempenho_medio: media(desempenho.map(a => Number(a.nota))),
        metas_em_andamento: emAndamento.length,
        metas_concluidas: concluidas.length,
        metas_atrasadas: atrasadas.length,
        total_metas: metas.length,
        indice_sobrecarga: null
    }
    return { indicadores, observacoes: ['Índice de sobrecarga não calculado: fórmula ainda não aprovada no contrato do banco.', 'Desempenho médio calculado somente com avaliações concluídas e notas disponíveis.'] }
}
module.exports = { consultarDados, calcular }
