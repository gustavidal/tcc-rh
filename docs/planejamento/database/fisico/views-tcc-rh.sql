##################### ARQUIVO RESPONSÁVEL PELAS VIEWS #####################
-- COLABORE - VIEWS REVISADAS - MYSQL 8+
-- Execucao: depois do CREATE (e INSERTs, se aplicavel), antes das PROCEDURES.
-- CONSULTAS DE INDICADORES: use vw_backend_* pela API; calcular na Service Node.js.
-- vw_indicadores_*, vw_sobrecarga_*, vw_desempenho_* e vw_alertas_colabore
-- seguem como views LEGADAS de compatibilidade com procedures ja existentes.
-- Nao utilizar calculos legados como resultado oficial dos indicadores.
-- Views nao autenticam usuarios; restringir acessos nas procedures e JWT.

### UTILIZE PRIMEIRO O SCRIPT DE CREATE ###
use db_tcc_rh;

-- ====== VIEW VW_TELEFONE ======
create or replace view vw_telefone as
select
    tbl_telefone.*
    , tbl_tipo_telefone.tipo as tipo_telefone
from tbl_telefone
left join tbl_tipo_telefone
    on tbl_tipo_telefone.id = tbl_telefone.id_tipo_telefone;

-- ====== VIEW VW_EMAIL ======
create or replace view vw_email as
select
    tbl_email.*
    , tbl_tipo_email.tipo as tipo_email
from tbl_email
left join tbl_tipo_email
    on tbl_tipo_email.id = tbl_email.id_tipo_email;

-- ====== VIEW VW_USUARIO ======
create or replace view vw_usuario as
select
    tbl_usuario.*
    , tbl_foto_usuario.foto as foto_usuario
from tbl_usuario
left join tbl_foto_usuario
    on tbl_foto_usuario.id = tbl_usuario.id_foto_usuario;

-- ====== VIEW VW_USUARIO_LOGIN ======
create or replace view vw_usuario_login as
select
    tbl_usuario_login.id,
    tbl_usuario_login.email_login,
    tbl_usuario_login.id_usuario,
    tbl_usuario.nome as nome_usuario
from tbl_usuario_login
left join tbl_usuario
    on tbl_usuario.id = tbl_usuario_login.id_usuario;

-- ====== VIEW VW_ADMINISTRATIVO ======
create or replace view vw_administrativo as
select
    tbl_administrativo.*
    , tbl_usuario.nome as nome_usuario
from tbl_administrativo
left join tbl_usuario
    on tbl_usuario.id = tbl_administrativo.id_usuario;

-- ====== VIEW VW_GESTOR ======
create or replace view vw_gestor as
select
    tbl_gestor.*
    , tbl_usuario.nome as nome_gestor
from tbl_gestor
left join tbl_usuario
    on tbl_usuario.id = tbl_gestor.id_usuario;

-- ====== VIEW VW_USUARIO_TELEFONE ======
create or replace view vw_usuario_telefone as
select
    tbl_usuario_telefone.*
    , tbl_usuario.nome as nome_usuario
    , tbl_telefone.numero as numero_telefone
from tbl_usuario_telefone
left join tbl_usuario
    on tbl_usuario.id = tbl_usuario_telefone.id_usuario
left join tbl_telefone
    on tbl_telefone.id = tbl_usuario_telefone.id_telefone;

-- ====== VIEW VW_COMPETENCIA ======
create or replace view vw_competencia as
select
    tbl_competencia.*
    , tbl_tipo_competencia.tipo as tipo_competencia
    , tbl_status_competencia.status as status_competencia
from tbl_competencia
left join tbl_tipo_competencia
    on tbl_tipo_competencia.id = tbl_competencia.id_tipo_competencia
left join tbl_status_competencia
    on tbl_status_competencia.id = tbl_competencia.id_status_competencia;

-- ====== VIEW VW_META_ORGANIZACIONAL ======
create or replace view vw_meta_organizacional as
select
    tbl_meta_organizacional.*
    , tbl_status_meta.status as status_meta
from tbl_meta_organizacional
left join tbl_status_meta
    on tbl_status_meta.id = tbl_meta_organizacional.id_status_meta;

-- ====== VIEW VW_FUNCIONARIO ======
create or replace view vw_funcionario as
select
    tbl_funcionario.*
    , tbl_sexo.sigla as sigla_sexo
    , tbl_sexo.sexo as sexo
    , tbl_cargo.nome as nome_cargo
    , tbl_gestor.id_usuario as id_usuario_gestor
    , tbl_usuario.nome as nome_gestor
    , tbl_foto_funcionario.foto as foto_funcionario
    , tbl_status_funcionario.status as status_funcionario
from tbl_funcionario
left join tbl_sexo
    on tbl_sexo.id = tbl_funcionario.id_sexo
left join tbl_cargo
    on tbl_cargo.id = tbl_funcionario.id_cargo
left join tbl_gestor
    on tbl_gestor.id = tbl_funcionario.id_gestor
left join tbl_usuario
    on tbl_usuario.id = tbl_gestor.id_usuario
left join tbl_foto_funcionario
    on tbl_foto_funcionario.id = tbl_funcionario.id_foto_funcionario
left join tbl_status_funcionario
    on tbl_status_funcionario.id = tbl_funcionario.id_status_funcionario;

-- ====== VIEW VW_AVALIACAO ======
create or replace view vw_avaliacao as
select
    tbl_avaliacao.*
    , tbl_funcionario.nome as nome_funcionario
from tbl_avaliacao
left join tbl_funcionario
    on tbl_funcionario.id = tbl_avaliacao.id_funcionario;

-- ====== VIEW VW_FUNCAO_FUNCIONARIO ======
create or replace view vw_funcao_funcionario as
select
    tbl_funcao_funcionario.*
    , tbl_funcao.nome as nome_funcao
    , tbl_funcionario.nome as nome_funcionario
from tbl_funcao_funcionario
left join tbl_funcao
    on tbl_funcao.id = tbl_funcao_funcionario.id_funcao
left join tbl_funcionario
    on tbl_funcionario.id = tbl_funcao_funcionario.id_funcionario;

-- ====== VIEW VW_COMPETENCIA_FUNCIONARIO ======
create or replace view vw_competencia_funcionario as
select
    tbl_competencia_funcionario.*
    , tbl_competencia.descricao as descricao_competencia
    , tbl_funcionario.nome as nome_funcionario
from tbl_competencia_funcionario
left join tbl_competencia
    on tbl_competencia.id = tbl_competencia_funcionario.id_competencia
left join tbl_funcionario
    on tbl_funcionario.id = tbl_competencia_funcionario.id_funcionario;

-- ====== VIEW VW_META_ORGANIZACIONAL_FUNCIONARIO ======
create or replace view vw_meta_organizacional_funcionario as
select
    tbl_meta_organizacional_funcionario.*
    , tbl_meta_organizacional.titulo as titulo_meta
    , tbl_funcionario.nome as nome_funcionario
from tbl_meta_organizacional_funcionario
left join tbl_meta_organizacional
    on tbl_meta_organizacional.id = tbl_meta_organizacional_funcionario.id_meta_organizacional
left join tbl_funcionario
    on tbl_funcionario.id = tbl_meta_organizacional_funcionario.id_funcionario;

-- ====== VIEW VW_FUNCIONARIO_DEPARTAMENTO ======
create or replace view vw_funcionario_departamento as
select
    tbl_funcionario_departamento.*
    , tbl_funcionario.nome as nome_funcionario
    , tbl_departamento.nome as nome_departamento
from tbl_funcionario_departamento
left join tbl_funcionario
    on tbl_funcionario.id = tbl_funcionario_departamento.id_funcionario
left join tbl_departamento
    on tbl_departamento.id = tbl_funcionario_departamento.id_departamento;

-- ====== VIEW VW_FUNCIONARIO_TELEFONE ======
create or replace view vw_funcionario_telefone as
select
    tbl_funcionario_telefone.*
    , tbl_funcionario.nome as nome_funcionario
    , tbl_telefone.numero as numero_telefone
from tbl_funcionario_telefone
left join tbl_funcionario
    on tbl_funcionario.id = tbl_funcionario_telefone.id_funcionario
left join tbl_telefone
    on tbl_telefone.id = tbl_funcionario_telefone.id_telefone;

-- ====== VIEW VW_FUNCIONARIO_EMAIL ======
create or replace view vw_funcionario_email as
select
    tbl_funcionario_email.*
    , tbl_funcionario.nome as nome_funcionario
    , tbl_email.email as email
from tbl_funcionario_email
left join tbl_funcionario
    on tbl_funcionario.id = tbl_funcionario_email.id_funcionario
left join tbl_email
    on tbl_email.id = tbl_funcionario_email.id_email;

-- ====== VIEW VW_DEPARTAMENTO_TELEFONE ======
create or replace view vw_departamento_telefone as
select
    tbl_departamento_telefone.*
    , tbl_departamento.nome as nome_departamento
    , tbl_telefone.numero as numero_telefone
from tbl_departamento_telefone
left join tbl_departamento
    on tbl_departamento.id = tbl_departamento_telefone.id_departamento
left join tbl_telefone
    on tbl_telefone.id = tbl_departamento_telefone.id_telefone;

-- ====== VIEW VW_DEPARTAMENTO_EMAIL ======
create or replace view vw_departamento_email as
select
    tbl_departamento_email.*
    , tbl_departamento.nome as nome_departamento
    , tbl_email.email as email
from tbl_departamento_email
left join tbl_departamento
    on tbl_departamento.id = tbl_departamento_email.id_departamento
left join tbl_email
    on tbl_email.id = tbl_departamento_email.id_email;

-- ====== VIEW VW_PERFIL_USUARIO ======
create or replace view vw_perfil_usuario as
select
    tbl_usuario.id as id_usuario,
    tbl_usuario.nome,
    tbl_usuario.data_nascimento,
    tbl_foto_usuario.foto,
    tbl_usuario_login.email_login,
    case when exists (select 1 from tbl_administrativo where id_usuario = tbl_usuario.id) then 1 else 0 end as administrativo,
    case when exists (select 1 from tbl_gestor where id_usuario = tbl_usuario.id) then 1 else 0 end as gestor
from tbl_usuario
left join tbl_foto_usuario on tbl_foto_usuario.id = tbl_usuario.id_foto_usuario
left join tbl_usuario_login on tbl_usuario_login.id_usuario = tbl_usuario.id;

-- ====== VIEW VW_USUARIO_EMAIL ======
create or replace view vw_usuario_email as
select
    tbl_usuario_email.id,
    tbl_usuario_email.id_usuario,
    tbl_email.id as id_email,
    tbl_email.email,
    tbl_tipo_email.tipo as tipo_email
from tbl_usuario_email
inner join tbl_email on tbl_email.id = tbl_usuario_email.id_email
inner join tbl_tipo_email on tbl_tipo_email.id = tbl_email.id_tipo_email;

-- ====== VIEW VW_LISTA_COLABORADORES ======
create or replace view vw_lista_colaboradores as
select
    vw_funcionario.*,
    tbl_funcionario.data_desligamento as data_desligamento_funcionario,
    (select group_concat(distinct d.nome order by d.nome separator ', ')
     from tbl_funcionario_departamento fd
     inner join tbl_departamento d on d.id = fd.id_departamento
     where fd.id_funcionario = vw_funcionario.id) as departamentos,
    (select group_concat(distinct fn.nome order by fn.nome separator ', ')
     from tbl_funcao_funcionario ff
     inner join tbl_funcao fn on fn.id = ff.id_funcao
     where ff.id_funcionario = vw_funcionario.id) as funcoes
from vw_funcionario
inner join tbl_funcionario on tbl_funcionario.id = vw_funcionario.id;

-- ====== VIEW VW_AVALIACAO_TELA ======
create or replace view vw_avaliacao_tela as
select
    tbl_avaliacao.id,
    tbl_avaliacao.id_funcionario,
    tbl_funcionario.nome as nome_funcionario,
    tbl_funcionario.id_gestor,
    tbl_avaliacao.id_avaliador,
    tbl_usuario.nome as nome_avaliador,
    tbl_avaliacao.data_inicio_periodo,
    tbl_avaliacao.data_fim_periodo,
    tbl_avaliacao.prazo,
    tbl_avaliacao.status,
    tbl_avaliacao.data_avaliacao,
    tbl_avaliacao.data_conclusao,
    tbl_avaliacao.nota,
    tbl_avaliacao.observacao,
    (select count(*) from tbl_avaliacao_competencia ac where ac.id_avaliacao = tbl_avaliacao.id) as total_competencias,
    (select count(*) from tbl_avaliacao_competencia ac where ac.id_avaliacao = tbl_avaliacao.id and ac.nota is not null) as competencias_preenchidas,
    (select round(avg(ac.nota), 2) from tbl_avaliacao_competencia ac where ac.id_avaliacao = tbl_avaliacao.id) as media_parcial
from tbl_avaliacao
inner join tbl_funcionario on tbl_funcionario.id = tbl_avaliacao.id_funcionario
left join tbl_usuario on tbl_usuario.id = tbl_avaliacao.id_avaliador;

-- ====== VIEW VW_AVALIACAO_COMPETENCIA_TELA ======
create or replace view vw_avaliacao_competencia_tela as
select
    ac.id,
    ac.id_avaliacao,
    av.id_funcionario,
    ac.id_competencia,
    c.descricao as competencia,
    c.nivel_esperado,
    tc.tipo as tipo_competencia,
    ac.nota,
    ac.observacao,
    ac.data_registro
from tbl_avaliacao_competencia ac
inner join tbl_avaliacao av on av.id = ac.id_avaliacao
inner join tbl_competencia c on c.id = ac.id_competencia
inner join tbl_tipo_competencia tc on tc.id = c.id_tipo_competencia;

-- ====== VIEW VW_COMPETENCIA_COLABORADOR_ATUAL ======
create or replace view vw_competencia_colaborador_atual as
select
    cf.id_funcionario,
    cf.id_competencia,
    c.descricao as competencia,
    c.nivel_esperado,
    tc.tipo as tipo_competencia,
    sc.status as status_competencia,
    (select ac.nota
     from tbl_avaliacao_competencia ac
     inner join tbl_avaliacao av on av.id = ac.id_avaliacao
     where av.id_funcionario = cf.id_funcionario and ac.id_competencia = cf.id_competencia
       and av.status = 'Concluida' and ac.nota is not null
     order by av.data_conclusao desc, av.id desc limit 1) as nivel_atual,
    (select av.data_conclusao
     from tbl_avaliacao_competencia ac
     inner join tbl_avaliacao av on av.id = ac.id_avaliacao
     where av.id_funcionario = cf.id_funcionario and ac.id_competencia = cf.id_competencia
       and av.status = 'Concluida' and ac.nota is not null
     order by av.data_conclusao desc, av.id desc limit 1) as ultima_avaliacao
from tbl_competencia_funcionario cf
inner join tbl_competencia c on c.id = cf.id_competencia
inner join tbl_tipo_competencia tc on tc.id = c.id_tipo_competencia
inner join tbl_status_competencia sc on sc.id = c.id_status_competencia;

-- ====== VIEW VW_METAS_TELA ======
create or replace view vw_metas_tela as
select
    m.id, m.titulo, m.descricao, m.prazo, m.id_status_meta,
    sm.status as status_meta,
    coalesce(mp.percentual, 0) as percentual,
    mp.data_registro as data_ultimo_progresso,
    (select group_concat(distinct d.nome order by d.nome separator ', ')
     from tbl_meta_departamento md
     inner join tbl_departamento d on d.id = md.id_departamento
     where md.id_meta_organizacional = m.id) as departamentos,
    (select group_concat(distinct f.nome order by f.nome separator ', ')
     from tbl_meta_organizacional_funcionario mf
     inner join tbl_funcionario f on f.id = mf.id_funcionario
     where mf.id_meta_organizacional = m.id) as funcionarios,
    case
        when exists (select 1 from tbl_meta_organizacional_funcionario mf where mf.id_meta_organizacional = m.id)
             and exists (select 1 from tbl_meta_departamento md where md.id_meta_organizacional = m.id)
             then 'Colaborador e setor'
        when exists (select 1 from tbl_meta_organizacional_funcionario mf where mf.id_meta_organizacional = m.id)
             then 'Colaborador'
        when exists (select 1 from tbl_meta_departamento md where md.id_meta_organizacional = m.id)
             then 'Setor'
        else 'Sem vínculo'
    end as vinculada_a
from tbl_meta_organizacional m
inner join tbl_status_meta sm on sm.id = m.id_status_meta
left join tbl_meta_progresso mp on mp.id = (
    select mp2.id
    from tbl_meta_progresso mp2
    where mp2.id_meta_organizacional = m.id
    order by mp2.data_registro desc, mp2.id desc
    limit 1
);

-- ====== VIEW VW_SOBRECARGA_SEMANAL ======
create or replace view vw_sobrecarga_semanal as
select
    at.id_funcionario,
    at.semana_referencia,
    j.horas_semanais,
    sum(at.quantidade_tarefas) as total_tarefas,
    sum(at.horas_previstas) as horas_previstas,
    case when j.horas_semanais > 0 then round(sum(at.horas_previstas) / j.horas_semanais * 100, 2) else null end as indice_sobrecarga
from tbl_atividade_trabalho at
left join tbl_jornada_funcionario j on j.id_funcionario = at.id_funcionario
group by at.id_funcionario, at.semana_referencia, j.horas_semanais;

-- ====== VIEW VW_SOBRECARGA_ATUAL ======
create or replace view vw_sobrecarga_atual as
select
    f.id as id_funcionario,
    s.semana_referencia,
    j.horas_semanais,
    s.total_tarefas,
    s.horas_previstas,
    s.indice_sobrecarga,
    case
        when j.horas_semanais is null then 'Sem jornada'
        when s.semana_referencia is null then 'Sem dados na semana'
        when s.indice_sobrecarga > cfg.limite_sobrecarga then 'Alta'
        when s.indice_sobrecarga >= cfg.limite_sobrecarga * 0.9 then 'Atencao'
        else 'Dentro do limite'
    end as situacao_sobrecarga
from tbl_funcionario f
left join tbl_jornada_funcionario j on j.id_funcionario = f.id
left join vw_sobrecarga_semanal s on s.id_funcionario = f.id
    and s.semana_referencia = date_sub(curdate(), interval weekday(curdate()) day)
left join tbl_configuracao_indicadores cfg on cfg.id = 1;

-- ====== VIEW VW_APONTAMENTO_HORAS_SEMANAL ======
create or replace view vw_apontamento_horas_semanal as
select
    id_funcionario,
    semana_referencia,
    sum(horas_trabalhadas) as horas_trabalhadas,
    sum(horas_extras) as horas_extras
from tbl_apontamento_horas
group by id_funcionario, semana_referencia;

-- ====== VIEW VW_DESEMPENHO_COLABORADOR ======
create or replace view vw_desempenho_colaborador as
select
    f.id as id_funcionario,
    round(avg(case when a.status = 'Concluida' then a.nota else null end), 2) as desempenho_medio,
    count(case when a.status = 'Concluida' then 1 else null end) as avaliacoes_concluidas,
    count(case when a.status = 'Pendente' then 1 else null end) as avaliacoes_pendentes
from tbl_funcionario f
left join tbl_avaliacao a on a.id_funcionario = f.id
group by f.id;

-- ====== VIEW VW_INDICADORES_COLABORADORES ======
create or replace view vw_indicadores_colaboradores as
select
    lf.*,
    dc.desempenho_medio,
    dc.avaliacoes_concluidas,
    dc.avaliacoes_pendentes,
    sa.indice_sobrecarga,
    sa.situacao_sobrecarga,
    sa.horas_previstas,
    sa.total_tarefas,
    (select count(*) from tbl_competencia_funcionario cf where cf.id_funcionario = lf.id) as competencias_vinculadas,
    (select count(*) from tbl_meta_organizacional_funcionario mf where mf.id_funcionario = lf.id) as metas_vinculadas,
    (select count(*) from tbl_meta_organizacional_funcionario mf
     inner join vw_metas_tela mt on mt.id = mf.id_meta_organizacional
     where mf.id_funcionario = lf.id and lower(mt.status_meta) in ('concluida','concluída')) as metas_concluidas
from vw_lista_colaboradores lf
left join vw_desempenho_colaborador dc on dc.id_funcionario = lf.id
left join vw_sobrecarga_atual sa on sa.id_funcionario = lf.id;

-- ====== VIEW VW_INDICADORES_SETOR ======
create or replace view vw_indicadores_setor as
select
    d.id as id_departamento,
    d.nome as departamento,
    count(distinct f.id) as total_colaboradores,
    round(avg(f.desempenho_medio), 2) as desempenho_medio,
    round(avg(f.indice_sobrecarga), 2) as indice_sobrecarga_medio,
    count(distinct case when f.situacao_sobrecarga = 'Alta' then f.id end) as colaboradores_sobrecarga
from tbl_departamento d
left join tbl_funcionario_departamento fd on fd.id_departamento = d.id
left join vw_indicadores_colaboradores f on f.id = fd.id_funcionario
group by d.id, d.nome;

-- ====== VIEW VW_ALERTAS_COLABORE ======
create or replace view vw_alertas_colabore as
select
    'SOBRECARGA' as tipo_alerta,
    ic.id as id_funcionario,
    ic.nome as nome_funcionario,
    ic.id_gestor,
    ic.indice_sobrecarga as valor_atual,
    cfg.limite_sobrecarga as valor_limite,
    'Alta' as prioridade
from vw_indicadores_colaboradores ic
join tbl_configuracao_indicadores cfg on cfg.id = 1
where ic.indice_sobrecarga > cfg.limite_sobrecarga
union all
select
    'BAIXO_DESEMPENHO',
    ic.id,
    ic.nome,
    ic.id_gestor,
    ic.desempenho_medio,
    cfg.limite_baixo_desempenho,
    'Alta'
from vw_indicadores_colaboradores ic
join tbl_configuracao_indicadores cfg on cfg.id = 1
where ic.desempenho_medio < cfg.limite_baixo_desempenho
union all
select
    'AVALIACAO_ATRASADA',
    av.id_funcionario,
    av.nome_funcionario,
    av.id_gestor,
    null,
    null,
    'Atencao'
from vw_avaliacao_tela av
where av.status = 'Pendente' and av.prazo < curdate();

-- ====== VIEW VW_EVOLUCAO_DESEMPENHO_MENSAL ======
create or replace view vw_evolucao_desempenho_mensal as
select
    a.id_funcionario,
    year(a.data_conclusao) as ano,
    month(a.data_conclusao) as mes,
    round(avg(a.nota), 2) as desempenho_medio,
    count(*) as total_avaliacoes
from tbl_avaliacao a
where a.status = 'Concluida' and a.data_conclusao is not null and a.nota is not null
group by a.id_funcionario, year(a.data_conclusao), month(a.data_conclusao);

-- ====== VIEW VW_PERFIL_EQUIPE ======
create or replace view vw_perfil_equipe as
select
    f.id as id_funcionario,
    f.id_gestor,
    f.id_sexo,
    sx.sexo,
    timestampdiff(year, f.data_nascimento, curdate()) as idade,
    case
        when timestampdiff(year, f.data_nascimento, curdate()) <= 25 then 'Ate 25 anos'
        when timestampdiff(year, f.data_nascimento, curdate()) <= 35 then '26 a 35 anos'
        else '36 anos ou mais'
    end as faixa_etaria
from tbl_funcionario f
inner join tbl_sexo sx on sx.id = f.id_sexo;

-- ====== VIEW VW_INDICADORES_HISTORICO ======
create or replace view vw_indicadores_historico as
select h.*, f.nome as nome_funcionario, f.id_gestor
from tbl_indicador_historico h
inner join tbl_funcionario f on f.id = h.id_funcionario;

-- ====== VIEW VW_AUDITORIA ======
create or replace view vw_auditoria as
select a.*, u.nome as nome_usuario
from tbl_auditoria a
left join tbl_usuario u on u.id = a.id_usuario;

-- ====== VIEW VW_PERMISSOES_USUARIO ======
create or replace view vw_permissoes_usuario as
select u.id as id_usuario,
    case
      when exists (select 1 from tbl_administrativo a where a.id_usuario = u.id) then 'RH'
      when exists (select 1 from tbl_gestor g where g.id_usuario = u.id) then 'GESTOR'
      else 'SEM_ACESSO' end as perfil,
    (select g.id from tbl_gestor g where g.id_usuario = u.id order by g.id limit 1) as id_gestor
from tbl_usuario u;

-- ====== VIEW VW_ESCOPO_FUNCIONARIO ======
create or replace view vw_escopo_funcionario as
select distinct a.id_usuario, f.id as id_funcionario
from tbl_administrativo a cross join tbl_funcionario f
union
select distinct g.id_usuario, f.id as id_funcionario
from tbl_gestor g inner join tbl_funcionario f on f.id_gestor = g.id;

-- ====== VIEW VW_AVALIACOES_PENDENTES ======
create or replace view vw_avaliacoes_pendentes as
select av.*, lf.departamentos, lf.nome_cargo
from vw_avaliacao_tela av
inner join vw_lista_colaboradores lf on lf.id = av.id_funcionario
where av.status = 'Pendente';

-- ====== VIEW VW_METAS_RESUMO ======
create or replace view vw_metas_resumo as
select
    count(*) as total_metas,
    coalesce(sum(case when lower(status_meta) in ('em andamento','andamento')
          and (prazo >= curdate() or prazo is null) then 1 else 0 end),0) as em_andamento,
    coalesce(sum(case when lower(status_meta) in ('concluida','concluída') then 1 else 0 end),0) as concluidas,
    coalesce(sum(case when lower(status_meta) in ('atrasada','atrasado') or
          (prazo < curdate() and lower(status_meta) not in ('concluida','concluída')) then 1 else 0 end),0) as atrasadas
from vw_metas_tela;

-- ====== VIEW VW_DISTRIBUICAO_COMPETENCIAS ======
create or replace view vw_distribuicao_competencias as
select cf.id_funcionario, cf.tipo_competencia,
       count(*) as quantidade,
       sum(case when cf.nivel_atual is not null and cf.nivel_esperado is not null
                 and cf.nivel_atual < cf.nivel_esperado then 1 else 0 end) as em_desenvolvimento
from vw_competencia_colaborador_atual cf
group by cf.id_funcionario, cf.tipo_competencia;

-- ====== VIEW VW_META_PROGRESSO_HISTORICO ======
create or replace view vw_meta_progresso_historico as
select mp.id, mp.id_meta_organizacional, m.titulo, mp.id_usuario_responsavel,
       u.nome as nome_responsavel, mp.percentual, mp.observacao, mp.data_registro
from tbl_meta_progresso mp
inner join tbl_meta_organizacional m on m.id = mp.id_meta_organizacional
inner join tbl_usuario u on u.id = mp.id_usuario_responsavel;

-- ====== VIEW VW_SOBRECARGA_DETALHADA ======
create or replace view vw_sobrecarga_detalhada as
select ic.id as id_funcionario, ic.nome, ic.nome_cargo, ic.departamentos, ic.id_gestor,
       sa.semana_referencia, sa.horas_semanais, sa.horas_previstas,
       sa.total_tarefas, sa.indice_sobrecarga, sa.situacao_sobrecarga,
       hs.horas_trabalhadas, hs.horas_extras, ic.desempenho_medio
from vw_indicadores_colaboradores ic
left join vw_sobrecarga_atual sa on sa.id_funcionario = ic.id
left join vw_apontamento_horas_semanal hs on hs.id_funcionario = ic.id
  and hs.semana_referencia = sa.semana_referencia;

-- ====== VIEW VW_BACKEND_AVALIACOES_BRUTAS ======
create or replace view vw_backend_avaliacoes_brutas as
select a.id as id_avaliacao, a.id_funcionario, a.id_avaliador,
       a.data_avaliacao, a.data_inicio_periodo, a.data_fim_periodo,
       a.prazo, a.status, a.data_conclusao, a.nota, a.observacao
from tbl_avaliacao a;

-- ====== VIEW VW_BACKEND_NOTAS_COMPETENCIAS_BRUTAS ======
create or replace view vw_backend_notas_competencias_brutas as
select ac.id, ac.id_avaliacao, a.id_funcionario, ac.id_competencia,
       c.descricao as competencia, c.nivel_esperado,
       ac.nota, ac.observacao, ac.data_registro
from tbl_avaliacao_competencia ac
inner join tbl_avaliacao a on a.id=ac.id_avaliacao
inner join tbl_competencia c on c.id=ac.id_competencia;

-- ====== VIEW VW_BACKEND_CARGA_BRUTA ======
create or replace view vw_backend_carga_bruta as
select
    f.id as id_funcionario,
    j.horas_semanais,
    j.vigente_desde,
    at.id as id_atividade,
    at.semana_referencia,
    at.quantidade_tarefas,
    at.horas_previstas,
    at.status as status_atividade
from tbl_funcionario f
left join tbl_jornada_funcionario j on j.id_funcionario = f.id
left join tbl_atividade_trabalho at on at.id_funcionario = f.id;

-- ====== VIEW VW_BACKEND_APONTAMENTOS_BRUTOS ======
create or replace view vw_backend_apontamentos_brutos as
select id, id_funcionario, id_usuario_registro, semana_referencia,
       horas_trabalhadas, horas_extras, data_registro
from tbl_apontamento_horas;

-- ====== VIEW VW_BACKEND_METAS_BRUTAS ======
create or replace view vw_backend_metas_brutas as
select
    m.id as id_meta, m.titulo, m.descricao, m.prazo,
    m.id_status_meta, sm.status as status_meta,
    mf.id_funcionario, cast(null as signed) as id_departamento,
    'FUNCIONARIO' as tipo_vinculo
from tbl_meta_organizacional m
inner join tbl_status_meta sm on sm.id = m.id_status_meta
inner join tbl_meta_organizacional_funcionario mf on mf.id_meta_organizacional = m.id
union all
select
    m.id, m.titulo, m.descricao, m.prazo,
    m.id_status_meta, sm.status,
    cast(null as signed), md.id_departamento,
    'DEPARTAMENTO'
from tbl_meta_organizacional m
inner join tbl_status_meta sm on sm.id = m.id_status_meta
inner join tbl_meta_departamento md on md.id_meta_organizacional = m.id
union all
select
    m.id, m.titulo, m.descricao, m.prazo,
    m.id_status_meta, sm.status,
    cast(null as signed), cast(null as signed),
    'SEM_VINCULO'
from tbl_meta_organizacional m
inner join tbl_status_meta sm on sm.id = m.id_status_meta
where not exists (select 1 from tbl_meta_organizacional_funcionario mf where mf.id_meta_organizacional = m.id)
  and not exists (select 1 from tbl_meta_departamento md where md.id_meta_organizacional = m.id);

-- ====== VIEW VW_BACKEND_PROGRESSO_METAS_BRUTO ======
create or replace view vw_backend_progresso_metas_bruto as
select id, id_meta_organizacional, id_usuario_responsavel,
       percentual, observacao, data_registro
from tbl_meta_progresso;

-- ====== VIEW VW_BACKEND_COLABORADORES_BRUTOS ======
create or replace view vw_backend_colaboradores_brutos as
select f.id as id_funcionario, f.nome, f.nome_social, f.cpf,
       f.numero_matricula, f.data_contratacao, f.data_desligamento,
       f.data_nascimento, f.id_gestor, f.id_cargo, c.nome as cargo,
       f.id_status_funcionario, sf.status as status_funcionario,
       fd.id_departamento, d.nome as departamento, f.id_sexo
from tbl_funcionario f
inner join tbl_cargo c on c.id=f.id_cargo
inner join tbl_status_funcionario sf on sf.id=f.id_status_funcionario
left join tbl_funcionario_departamento fd on fd.id_funcionario=f.id
left join tbl_departamento d on d.id=fd.id_departamento;

-- ====== VIEW VW_BACKEND_PARAMETROS_INDICADORES ======
create or replace view vw_backend_parametros_indicadores as
select id, limite_sobrecarga, limite_baixo_desempenho
from tbl_configuracao_indicadores;

-- ====== VIEW VW_BACKEND_METAS_CADASTRO_BRUTO ======
create or replace view vw_backend_metas_cadastro_bruto as
select m.id as id_meta, m.titulo, m.descricao, m.prazo, m.id_status_meta,
       sm.status as status_meta
from tbl_meta_organizacional m
inner join tbl_status_meta sm on sm.id = m.id_status_meta;

-- ====== VIEW VW_BACKEND_METAS_FUNCIONARIOS_BRUTO ======
create or replace view vw_backend_metas_funcionarios_bruto as
select mf.id_meta_organizacional as id_meta, mf.id_funcionario
from tbl_meta_organizacional_funcionario mf;

-- ====== VIEW VW_BACKEND_METAS_DEPARTAMENTOS_BRUTO ======
create or replace view vw_backend_metas_departamentos_bruto as
select md.id_meta_organizacional as id_meta, md.id_departamento
from tbl_meta_departamento md;

-- ====== VIEW VW_BACKEND_JORNADA_BRUTA ======
create or replace view vw_backend_jornada_bruta as
select id, id_funcionario, horas_semanais, vigente_desde
from tbl_jornada_funcionario;

-- ====== VIEW VW_BACKEND_ATIVIDADES_BRUTAS ======
create or replace view vw_backend_atividades_brutas as
select id, id_funcionario, id_usuario_responsavel, titulo, descricao,
       quantidade_tarefas, horas_previstas, semana_referencia, status,
       data_registro, data_conclusao
from tbl_atividade_trabalho;

-- ====== VIEW VW_BACKEND_COMPETENCIAS_VINCULADAS_BRUTAS ======
create or replace view vw_backend_competencias_vinculadas_brutas as
select cf.id_funcionario, cf.id_competencia, c.descricao,
       c.nivel_esperado, c.id_tipo_competencia, c.id_status_competencia
from tbl_competencia_funcionario cf
inner join tbl_competencia c on c.id = cf.id_competencia;

-- ====== VIEW VW_BACKEND_EVOLUCAO_AVALIACOES_BRUTA ======
create or replace view vw_backend_evolucao_avaliacoes_bruta as
select id as id_avaliacao, id_funcionario, data_conclusao, nota, status
from tbl_avaliacao;

-- ====== VIEW VW_BACKEND_AVALIACOES_PENDENTES_BRUTA ======
create or replace view vw_backend_avaliacoes_pendentes_bruta as
select a.id as id_avaliacao, a.id_funcionario, f.id_gestor,
       a.id_avaliador, a.prazo, a.status
from tbl_avaliacao a
inner join tbl_funcionario f on f.id = a.id_funcionario
where a.status = 'Pendente';