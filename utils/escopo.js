const { knexConection } = require('./procedure.js')
const idValido = id => Number.isSafeInteger(Number(id)) && Number(id) > 0
const autorizado = async (usuario, sql, id) => {
    if (!idValido(id)) return false
    if (usuario.perfil === 'administrativo') return true
    const [linhas] = await knexConection.raw(sql, [usuario.id_usuario, Number(id)])
    return Array.isArray(linhas) && linhas.length > 0
}
const funcionarioAutorizado = (usuario, id) => autorizado(usuario,
    'select 1 from vw_escopo_funcionario where id_usuario = ? and id_funcionario = ? limit 1', id)
const avaliacaoAutorizada = (usuario, id) => autorizado(usuario,
    `select 1 from vw_avaliacao_tela a inner join vw_escopo_funcionario e
     on e.id_funcionario = a.id_funcionario where e.id_usuario = ? and a.id = ? limit 1`, id)
const metaAutorizada = (usuario, id) => autorizado(usuario,
    `select 1 from tbl_meta_organizacional_funcionario mf
     inner join vw_escopo_funcionario e on e.id_funcionario = mf.id_funcionario
     where e.id_usuario = ? and mf.id_meta_organizacional = ? limit 1`, id)
module.exports = {funcionarioAutorizado, avaliacaoAutorizada, metaAutorizada}
