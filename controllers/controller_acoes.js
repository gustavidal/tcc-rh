const { executar } = require('../utils/procedure.js')
const { funcionarioAutorizado, avaliacaoAutorizada, metaAutorizada } = require('../utils/escopo.js')
const responderErro = (res, erro) => res.status(500).json({message:'Erro interno no banco de dados'})
const operacaoComposta = async function (req,res) {
    try {
        const acao = req.params.acao
        let nome, dados
        const idFuncionario = req.body.id_funcionario_param
        if (acao === 'criar-avaliacao' && !(await funcionarioAutorizado(req.usuario, idFuncionario))) return res.status(403).json({message:'Colaborador fora do seu escopo'})
        if (['concluir-avaliacao', 'registrar-nota'].includes(acao) && !(await avaliacaoAutorizada(req.usuario, req.body.id_avaliacao_param))) return res.status(403).json({message:'Avaliação fora do seu escopo'})
        if (acao === 'progresso-meta' && !(await metaAutorizada(req.usuario, req.body.id_meta_param))) return res.status(403).json({message:'Meta fora do seu escopo'})
        if (acao === 'criar-avaliacao') {
            nome = 'procAvaliacaoFluxo'
            dados = {operacao:'INSERT',id_avaliacao_param:null,id_funcionario_param:req.body.id_funcionario_param,id_avaliador_param:req.usuario.id_usuario,data_inicio_param:req.body.data_inicio_param,data_fim_param:req.body.data_fim_param,prazo_param:req.body.prazo_param,observacao_param:req.body.observacao_param || null}
        } else if (acao === 'concluir-avaliacao') {
            nome = 'procAvaliacaoFluxo'
            dados = {operacao:'CONCLUIR',id_avaliacao_param:req.body.id_avaliacao_param,id_avaliador_param:req.usuario.id_usuario}
        } else if (acao === 'registrar-nota') {
            nome = 'procRegistrarNotaCompetencia'
            dados = {id_avaliacao_param:req.body.id_avaliacao_param,id_competencia_param:req.body.id_competencia_param,nota_param:req.body.nota_param,observacao_param:req.body.observacao_param || null,id_usuario_param:req.usuario.id_usuario}
            if (dados.nota_param === undefined || dados.nota_param === null || dados.nota_param === '' || !Number.isFinite(Number(dados.nota_param)) || Number(dados.nota_param) < 0 || Number(dados.nota_param)>10) return res.status(400).json({message:'Nota deve ser entre 0 e 10'})
        } else if (acao === 'progresso-meta') {
            nome = 'procAtualizarProgressoMeta'
            dados = {id_meta_param:req.body.id_meta_param,id_usuario_param:req.usuario.id_usuario,percentual_param:req.body.percentual_param,observacao_param:req.body.observacao_param || null}
            if (dados.percentual_param === undefined || dados.percentual_param === null || dados.percentual_param === '' || !Number.isFinite(Number(dados.percentual_param)) || Number(dados.percentual_param)<0 || Number(dados.percentual_param)>100) return res.status(400).json({message:'Percentual deve ser entre 0 e 100'})
        } else return res.status(404).json({message:'Ação inexistente'})
        for(const [campo, valor] of Object.entries(dados)) if (campo.endsWith('_param') && valor === undefined) return res.status(400).json({message:'Campo obrigatório: '+campo})
        const result = await executar(nome,dados) // transação já controlada no SQL
        return res.status(200).json({data:result})
    } catch(error) { return responderErro(res,error) }
}
module.exports = {operacaoComposta}
