##################### ARQUIVO RESPONSÁVEL PELOS CREATEs #####################

-- Criação do Datase para armazenar os dados sobre o:
-- Sistema Integrado de Inteligência Estratégica em Gestão de Pessoas para Apoio à Tomada de Decisão

-- Criação do database
create database db_tcc_rh;

-- Utilização do database
use db_tcc_rh;

-- ===========================================================
-- COLABORE - CRIAÇÃO COMPLETA DO ZERO (MySQL 8.0+)
-- Somente para SCHEMA VAZIO. NÃO executar em banco já populado.
-- Se já existem tabelas, use APENAS 00_ajustes_modelagem_colabore.sql.
-- Selecionar o schema (USE nome_do_banco) antes de executar.
-- ===========================================================

-- ====== TABELAS AUXILIARES ======
-- Tabela de Tipo Email
create table tbl_tipo_email (
id    int not null auto_increment primary key,
tipo  varchar(20) not null
);

-- Tabela de Email
create table tbl_email (
id            int not null auto_increment primary key,
email         varchar(256) not null,
id_tipo_email int not null,

constraint  FK_TIPOEMAIL_EMAIL
foreign key (id_tipo_email)
references  tbl_tipo_email(id)
);

-- Tabela de Tipo Telefone
create table tbl_tipo_telefone (
id    int not null auto_increment primary key,
tipo  varchar(15) not null
);

-- Tabela de Telefone
create table tbl_telefone (
id               int not null auto_increment primary key,
numero           varchar(25) not null,
id_tipo_telefone int not null,

constraint  FK_TIPOTELEFONE_TELEFONE
foreign key (id_tipo_telefone)
references  tbl_tipo_telefone(id)
);

-- Tabela de Tipo Competência
create table tbl_tipo_competencia (
id    int not null auto_increment primary key,
tipo  varchar(40) not null
);

-- Tabela de Status Competência
create table tbl_status_competencia (
id      int not null auto_increment primary key,
status  varchar(40) not null
);

-- Tabela de Status Meta
create table tbl_status_meta (
id      int not null auto_increment primary key,
status  varchar(40) not null
);

-- Tabela de Status Funcionário
create table tbl_status_funcionario (
id      int not null auto_increment primary key,
status  varchar(40) not null
);

-- Tabela de Foto do Usuário
create table tbl_foto_usuario (
id    int not null auto_increment primary key,
foto  varchar(250)
);

-- Tabela de Foto do Funcionário
create table tbl_foto_funcionario (
id    int not null auto_increment primary key,
foto  varchar(250)
);

-- =============== CRIAÇÃO DAS TABELAS QUE FORNECEM CHAVE ESTRANGEIRA (FK) ===============

-- ====== TABELAS DO USUÁRIO ======
-- Tabela de Usuário (PRINCIPAL)
create table tbl_usuario (
id                int not null auto_increment primary key,
nome              varchar(100) not null,
data_nascimento   date not null,
id_foto_usuario   int not null,

constraint  FK_FOTOUSUARIO_USUARIO
foreign key (id_foto_usuario)
references  tbl_foto_usuario(id)
);

-- ====== TABELAS DO FUNCIONÁRIO ======
-- Tabela de Função
create table tbl_funcao (
id    int not null auto_increment primary key,
nome  varchar(100) not null
);

-- Tabela de Cargo
create table tbl_cargo (
id    int not null auto_increment primary key,
nome  varchar(65) not null
);

-- Tabela de Sexo
create table tbl_sexo (
id     int not null auto_increment primary key,
sigla  varchar(3) not null,
sexo   varchar(15) not null
);

-- Tabela de Competência
create table tbl_competencia (
id                       int not null auto_increment primary key,
descricao                varchar(100) not null,
nivel_esperado           decimal(4,2),
data_ultima_avaliacao    date,
id_tipo_competencia      int not null,
id_status_competencia    int not null,

constraint  FK_TIPOCOMPETENCIA_COMPETENCIA
foreign key (id_tipo_competencia)
references  tbl_tipo_competencia(id),

constraint  FK_STATUSCOMPETENCIA_COMPETENCIA
foreign key (id_status_competencia)
references  tbl_status_competencia(id)
);

-- Tabela de Meta Organizacional
create table tbl_meta_organizacional (
id               int not null auto_increment primary key,
titulo           varchar(150) not null,
prazo            date not null,
descricao        text not null,
id_status_meta   int not null,

constraint  FK_STATUSMETA_METAORGANIZACIONAL
foreign key (id_status_meta)
references  tbl_status_meta(id)
);

-- ====== TABELAS DO DEPARTAMENTO ======
-- Tabela de Departamento (PRINCIPAL)
create table tbl_departamento (
id    int not null auto_increment primary key,
nome  varchar(100) not null
);

-- =============== CRIAÇÃO DAS TABELAS QUE RECEBEM CHAVE ESTRANGEIRA (FK) ===============

-- ====== TABELAS DO USUÁRIO ======
-- Tabela de Login do Usuário
create table tbl_usuario_login (
id           int not null auto_increment primary key,
email_login  varchar(256) not null,
senha_hash   varchar(512) not null,
id_usuario   int not null,

constraint  FK_USUARIO_USUARIOLOGIN
foreign key (id_usuario)
references  tbl_usuario(id)
);

-- Tabela de Administrativo (PRINCIPAL)
create table tbl_administrativo (
id          int not null auto_increment primary key,
id_usuario  int not null,

constraint  FK_USUARIO_ADMINISTRATIVO
foreign key (id_usuario)
references  tbl_usuario(id)
);

-- Tabela de Gestor (PRINCIPAL)
create table tbl_gestor (
id          int not null auto_increment primary key,
id_usuario  int not null,

constraint  FK_USUARIO_GESTOR
foreign key (id_usuario)
references  tbl_usuario(id)
);

-- ====== TABELAS DO FUNCIONÁRIO ======
-- Tabela do Funcionário (PRINCIPAL)
create table tbl_funcionario (
id                     int not null auto_increment primary key,
nome_social            varchar(100),
nome                   varchar(100) not null,
cpf                    varchar(18) not null,
data_contratacao       date not null,
data_nascimento        date not null,
numero_matricula       int not null,
id_sexo                int not null,
id_cargo               int not null,
id_gestor              int not null,
id_foto_funcionario    int not null,
id_status_funcionario  int not null,

constraint  FK_SEXO_FUNCIONARIO
foreign key (id_sexo)
references  tbl_sexo(id),

constraint  FK_CARGO_FUNCIONARIO
foreign key (id_cargo)
references  tbl_cargo(id),

constraint  FK_GESTOR_FUNCIONARIO
foreign key (id_gestor)
references  tbl_gestor(id),

constraint  FK_FOTOFUNCIONARIO_FUNCIONARIO
foreign key (id_foto_funcionario)
references  tbl_foto_funcionario(id),

constraint  FK_STATUSFUNCIONARIO_FUNCIONARIO
foreign key (id_status_funcionario)
references  tbl_status_funcionario(id)
);

-- Tabela de Avaliação
create table tbl_avaliacao (
id              int not null auto_increment primary key,
data_avaliacao  datetime,
nota            decimal(3,1),
observacao      text,
id_funcionario  int not null,

constraint  FK_FUNCIONARIO_AVALIACAO
foreign key (id_funcionario)
references  tbl_funcionario(id)
);

-- =============== CRIAÇÃO DAS TABELAS INTERMEDIÁRIAS ===============

-- ====== TABELAS DO USUÁRIO ======
-- Tabela de usuario-telefone
create table tbl_usuario_telefone (
id           int not null auto_increment primary key,
id_usuario   int not null,
id_telefone  int not null,

constraint  FK_USUARIO_USUARIOTELEFONE
foreign key (id_usuario)
references  tbl_usuario(id),

constraint  FK_TELEFONE_USUARIOTELEFONE
foreign key (id_telefone)
references  tbl_telefone(id)
);

-- ====== TABELAS DO DEPARTAMENTO ======
-- Tabela de departamento-email
create table tbl_departamento_email (
id               int not null auto_increment primary key,
id_departamento  int not null,
id_email         int not null,

constraint  FK_DEPARTAMENTO_DEPARTAMENTOEMAIL
foreign key (id_departamento)
references  tbl_departamento(id),

constraint  FK_EMAIL_DEPARTAMENTOEMAIL
foreign key (id_email)
references  tbl_email(id)
);

-- Tabela de departamento-telefone
create table tbl_departamento_telefone (
id               int not null auto_increment primary key,
id_departamento  int not null,
id_telefone      int not null,

constraint  FK_DEPARTAMENTO_DEPARTAMENTOTELEFONE
foreign key (id_departamento)
references  tbl_departamento(id),

constraint  FK_TELEFONE_DEPARTAMENTOTELEFONE
foreign key (id_telefone)
references  tbl_telefone(id)
);

-- ====== TABELAS DO FUNCIONÁRIO ======
-- Tabela de funcionario-telefone
create table tbl_funcionario_telefone (
id              int not null auto_increment primary key,
id_funcionario  int not null,
id_telefone     int not null,

constraint  FK_FUNCIONARIO_FUNCIONARIOTELEFONE
foreign key (id_funcionario)
references  tbl_funcionario(id),

constraint  FK_TELEFONE_FUNCIONARIOTELEFONE
foreign key (id_telefone)
references  tbl_telefone(id)
);

-- Tabela de funcionario-email
create table tbl_funcionario_email (
id              int not null auto_increment primary key,
id_funcionario  int not null,
id_email        int not null,

constraint  FK_FUNCIONARIO_FUNCIONARIOEMAIL
foreign key (id_funcionario)
references  tbl_funcionario(id),

constraint  FK_EMAIL_FUNCIONARIOEMAIL
foreign key (id_email)
references  tbl_email(id)
);

-- Tabela de funcao-funcionario
create table tbl_funcao_funcionario (
id              int not null auto_increment primary key,
id_funcao       int not null,
id_funcionario  int not null,

constraint  FK_FUNCAO_FUNCAOFUNCIONARIO
foreign key (id_funcao)
references  tbl_funcao(id),

constraint  FK_FUNCIONARIO_FUNCAOFUNCIONARIO
foreign key (id_funcionario)
references  tbl_funcionario(id)
);

-- Tabela de competencia-funcionario
create table tbl_competencia_funcionario (
id              int not null auto_increment primary key,
id_competencia  int not null,
id_funcionario  int not null,

constraint  FK_COMPETENCIA_COMPETENCIAFUNCIONARIO
foreign key (id_competencia)
references  tbl_competencia(id),

constraint  FK_FUNCIONARIO_COMPETENCIAFUNCIONARIO
foreign key (id_funcionario)
references  tbl_funcionario(id)
);

-- Tabela de meta_organizacional-funcionario
create table tbl_meta_organizacional_funcionario (
id                      int not null auto_increment primary key,
id_meta_organizacional  int not null,
id_funcionario          int not null,

constraint  FK_METAORGANIZACIONAL_METAORGANIZACIONALFUNCIONARIO
foreign key (id_meta_organizacional)
references  tbl_meta_organizacional(id),

constraint  FK_FUNCIONARIO_METAORGANIZACIONALFUNCIONARIO
foreign key (id_funcionario)
references  tbl_funcionario(id)
);

-- ====== TABELA DE RELAÇÃO ENTRE FUNCIONÁRIO E DEPARTAMENTO ======
-- Tabela de funcionario-departamento
create table tbl_funcionario_departamento (
id               int not null auto_increment primary key,
id_funcionario   int not null,
id_departamento  int not null,

constraint  FK_FUNCIONARIO_FUNCIONARIODEPARTAMENTO
foreign key (id_funcionario)
references  tbl_funcionario(id),

constraint  FK_DEPARTAMENTO_FUNCIONARIODEPARTAMENTO
foreign key (id_departamento)
references  tbl_departamento(id)
);

-- ===========================================================
-- COLABORE - AJUSTES DE MODELAGEM PROPOSTOS (MySQL 8.0)
-- REVISAR COM A EQUIPE E FAZER BACKUP ANTES DE EXECUTAR.
-- Executar UMA VEZ após os CREATE TABLE originais.
-- Campos e tabelas novos são requisitos do protótipo, não
-- fazem parte do DDL original enviado pelo usuário.
-- As constraints UNIQUE podem falhar caso haja duplicidades:
-- corrigir dados existentes antes de executar.
-- ===========================================================

-- ====== INTEGRIDADE DOS REGISTROS EXISTENTES ======
-- A foto padrão deve existir com ID 1 em ambas as tabelas.
-- Criar os registros das fotos ANTES de cadastrar usuários/funcionários.
-- Nunca sobrescrever a URL atual da foto ID 1 nesta migração.

-- Executar estas verificações ANTES das UNIQUE:
-- select cpf, count(*) from tbl_funcionario group by cpf having count(*) > 1;
-- select numero_matricula, count(*) from tbl_funcionario group by numero_matricula having count(*) > 1;
-- select email_login, count(*) from tbl_usuario_login group by email_login having count(*) > 1;

alter table tbl_funcionario
    add constraint UK_FUNCIONARIO_CPF unique (cpf),
    add constraint UK_FUNCIONARIO_MATRICULA unique (numero_matricula);

alter table tbl_usuario_login
    add constraint UK_USUARIOLOGIN_EMAIL unique (email_login);

-- Para relatórios de desligamento e turnover (páginas 10 e 24).
alter table tbl_funcionario
    add column data_desligamento date null;

-- Períodos, responsável, prazo e andamento (páginas 5 e 16).
alter table tbl_avaliacao
    add column data_inicio_periodo date null,
    add column data_fim_periodo date null,
    add column prazo date null,
    add column id_avaliador int null,
    add column status varchar(25) not null default 'Pendente',
    add column data_conclusao datetime null,
    add constraint FK_USUARIO_AVALIACAO foreign key (id_avaliador) references tbl_usuario(id);

-- Evitar vínculos duplicados de entidades intermediárias.
-- A execução exige retirar previamente possíveis duplicidades.
alter table tbl_funcionario_departamento add constraint UK_FUNCIONARIO_DEPARTAMENTO unique (id_funcionario, id_departamento);
alter table tbl_competencia_funcionario add constraint UK_COMPETENCIA_FUNCIONARIO unique (id_competencia, id_funcionario);
alter table tbl_funcao_funcionario add constraint UK_FUNCAO_FUNCIONARIO unique (id_funcao, id_funcionario);
alter table tbl_meta_organizacional_funcionario add constraint UK_META_FUNCIONARIO unique (id_meta_organizacional, id_funcionario);

-- ====== AVALIAÇÃO DE CADA COMPETÊNCIA ======
create table if not exists tbl_avaliacao_competencia (
    id              int not null auto_increment primary key,
    id_avaliacao    int not null,
    id_competencia  int not null,
    nota            decimal(3,1) null,
    observacao      text,
    data_registro   datetime not null default current_timestamp,

    constraint FK_AVALIACAO_AVALIACAOCOMPETENCIA
    foreign key (id_avaliacao) references tbl_avaliacao(id),

    constraint FK_COMPETENCIA_AVALIACAOCOMPETENCIA
    foreign key (id_competencia) references tbl_competencia(id),

    constraint UK_AVALIACAO_COMPETENCIA unique (id_avaliacao, id_competencia),
    constraint CHK_AVALIACAOCOMPETENCIA_NOTA check (nota between 0 and 10 or nota is null)
);

-- ====== JORNADA E ATIVIDADES ======
create table if not exists tbl_jornada_funcionario (
    id                int not null auto_increment primary key,
    id_funcionario    int not null,
    horas_semanais    decimal(5,2) not null,
    vigente_desde     date not null,

    constraint FK_FUNCIONARIO_JORNADA foreign key (id_funcionario) references tbl_funcionario(id),
    constraint UK_JORNADA_FUNCIONARIO unique (id_funcionario),
    constraint CHK_JORNADA_HORAS check (horas_semanais > 0 and horas_semanais <= 168)
);

create table if not exists tbl_atividade_trabalho (
    id                     int not null auto_increment primary key,
    id_funcionario         int not null,
    id_usuario_responsavel int not null,
    titulo                 varchar(150) not null,
    descricao              text,
    quantidade_tarefas     int not null default 1,
    horas_previstas        decimal(7,2) not null,
    semana_referencia      date not null,
    status                 varchar(25) not null default 'Pendente',
    data_registro          datetime not null default current_timestamp,
    data_conclusao         datetime null,

    constraint FK_FUNCIONARIO_ATIVIDADE foreign key (id_funcionario) references tbl_funcionario(id),
    constraint FK_USUARIO_ATIVIDADE foreign key (id_usuario_responsavel) references tbl_usuario(id),
    constraint CHK_ATIVIDADE_TAREFAS check (quantidade_tarefas >= 1),
    constraint CHK_ATIVIDADE_HORAS check (horas_previstas >= 0)
);

create table if not exists tbl_apontamento_horas (
    id                  int not null auto_increment primary key,
    id_funcionario      int not null,
    id_usuario_registro int not null,
    semana_referencia   date not null,
    horas_trabalhadas   decimal(7,2) not null,
    horas_extras        decimal(7,2) not null default 0,
    data_registro       datetime not null default current_timestamp,

    constraint FK_FUNCIONARIO_APONTAMENTOHORAS foreign key (id_funcionario) references tbl_funcionario(id),
    constraint FK_USUARIO_APONTAMENTOHORAS foreign key (id_usuario_registro) references tbl_usuario(id),
    constraint CHK_APONTAMENTOHORAS_HORAS check (horas_trabalhadas >= 0 and horas_extras >= 0)
);

-- ====== METAS POR DEPARTAMENTO E HISTÓRICO ======
create table if not exists tbl_meta_departamento (
    id                      int not null auto_increment primary key,
    id_meta_organizacional  int not null,
    id_departamento         int not null,
    constraint FK_META_METADEPARTAMENTO foreign key (id_meta_organizacional) references tbl_meta_organizacional(id),
    constraint FK_DEPARTAMENTO_METADEPARTAMENTO foreign key (id_departamento) references tbl_departamento(id),
    constraint UK_META_DEPARTAMENTO unique (id_meta_organizacional, id_departamento)
);

create table if not exists tbl_meta_progresso (
    id                      int not null auto_increment primary key,
    id_meta_organizacional  int not null,
    id_usuario_responsavel  int not null,
    percentual              decimal(5,2) not null,
    observacao              text,
    data_registro           datetime not null default current_timestamp,

    constraint FK_META_METAPROGRESSO foreign key (id_meta_organizacional) references tbl_meta_organizacional(id),
    constraint FK_USUARIO_METAPROGRESSO foreign key (id_usuario_responsavel) references tbl_usuario(id),
    constraint CHK_METAPROGRESSO_PERCENTUAL check (percentual between 0 and 100)
);

-- ====== EMAIL PESSOAL / INSTITUCIONAL DO USUÁRIO ======
create table if not exists tbl_usuario_email (
    id           int not null auto_increment primary key,
    id_usuario   int not null,
    id_email     int not null,
    constraint FK_USUARIO_USUARIOEMAIL foreign key (id_usuario) references tbl_usuario(id),
    constraint FK_EMAIL_USUARIOEMAIL foreign key (id_email) references tbl_email(id),
    constraint UK_USUARIO_EMAIL unique (id_usuario, id_email)
);

-- ====== CONFIGURAÇÕES DOS INDICADORES ======
-- 80% aparece no slide 3. A referência inicial de nota 6/10
-- é PROPOSTA e deve ser confirmada pela equipe do TCC.
create table if not exists tbl_configuracao_indicadores (
    id                     int not null primary key,
    limite_sobrecarga      decimal(6,2) not null,
    limite_baixo_desempenho decimal(4,2) not null,
    constraint CHK_CONFIG_SOBRECARGA check (limite_sobrecarga > 0),
    constraint CHK_CONFIG_DESEMPENHO check (limite_baixo_desempenho between 0 and 10)
);

insert into tbl_configuracao_indicadores (id, limite_sobrecarga, limite_baixo_desempenho)
select 1, 80.00, 6.00
where not exists (select 1 from tbl_configuracao_indicadores where id = 1);

-- ====== HISTÓRICO DE INDICADORES E AUDITORIA ======
create table if not exists tbl_indicador_historico (
    id                int not null auto_increment primary key,
    id_funcionario    int not null,
    semana_referencia date not null,
    indice_sobrecarga decimal(7,2) null,
    desempenho_medio  decimal(4,2) null,
    data_registro     datetime not null default current_timestamp,
    constraint FK_FUNCIONARIO_INDICADORHISTORICO foreign key (id_funcionario) references tbl_funcionario(id),
    constraint UK_INDICADOR_FUNCIONARIO_SEMANA unique (id_funcionario, semana_referencia)
);

create table if not exists tbl_auditoria (
    id             bigint not null auto_increment primary key,
    id_usuario     int null,
    entidade       varchar(80) not null,
    id_registro    int not null,
    operacao       varchar(30) not null,
    dados_anteriores json null,
    dados_novos    json null,
    data_registro  datetime not null default current_timestamp,
    constraint FK_USUARIO_AUDITORIA foreign key (id_usuario) references tbl_usuario(id)
);

-- Índices necessários para listagens, filtros e relatórios.
create index IDX_AVALIACAO_FUNCIONARIO_STATUS on tbl_avaliacao(id_funcionario, status, prazo);
create index IDX_ATIVIDADE_FUNCIONARIO_SEMANA on tbl_atividade_trabalho(id_funcionario, semana_referencia);
create index IDX_HORAS_FUNCIONARIO_SEMANA on tbl_apontamento_horas(id_funcionario, semana_referencia);
create index IDX_METAPROGRESSO_META_DATA on tbl_meta_progresso(id_meta_organizacional, id);
create index IDX_AUDITORIA_ENTIDADE_DATA on tbl_auditoria(entidade, data_registro);