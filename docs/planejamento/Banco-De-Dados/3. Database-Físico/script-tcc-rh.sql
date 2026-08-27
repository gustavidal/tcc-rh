-- Criação do Datase para armazenar os dados sobre o:
-- Sistema Integrado de Inteligência Estratégica em Gestão de Pessoas para Apoio à Tomada de Decisão

-- Criação do database
create database db_tcc_rh;

-- Utilização do database
use db_tcc_rh;

-- ====== TABELAS AUXILIARES ======
-- Tabela de Email
create table tbl_email (
id 	   int not null auto_increment primary key,
email  varchar(256) not null
);

-- Tabela de Tipo Telefone
create table tbl_tipo_telefone (
id 	  int not null auto_increment primary key,
tipo  varchar(15) not null
);

-- Tabela de Telefone
create table tbl_telefone (
id 	    		 int not null auto_increment primary key,
numero  		 varchar(25) not null,
id_tipo_telefone int not null,

constraint	FK_TIPOTELEFONE_TELEFONE
foreign key (id_tipo_telefone)
references	tbl_tipo_telefone(id)
);

-- =============== CRIAÇÃO DAS TABELAS QUE FORNECEM CHAVE ESTRANGEIRA (FK) ===============

-- ====== TABELAS DO USUÁRIO ======
-- Tabela de Usuário (PRINCIPAL)
create table tbl_usuario (
id 				int not null auto_increment primary key,
nome 			varchar(100) not null,
data_nascimento date not null
);

-- ====== TABELAS DO FUNCIONÁRIO ======
-- Tabela de Função
create table tbl_funcao (
id 	 int not null auto_increment primary key,
nome varchar(100) not null
);

-- Tabela de Competência
create table tbl_competencia (
id 		  int not null auto_increment primary key,
descricao varchar(100) not null
);

-- Tabela de Cargo
create table tbl_cargo (
id 	 int not null auto_increment primary key,
nome varchar(65) not null
);

-- Tabela de Sexo
create table tbl_sexo (
id 	  int not null auto_increment primary key,
sigla varchar(3) not null,
sexo  varchar(15) not null
);

-- Tabela de Meta Organizacional
create table tbl_meta_organizacional (
id 	  	   int not null auto_increment primary key,
titulo	   varchar(150) not null,
descricao  text not null
);

-- ====== TABELAS DO DEPARTAMENTO ======
-- Tabela de Departamento (PRINCIPAL)
create table tbl_departamento (
id 	  int not null auto_increment primary key,
nome  varchar(100) not null
);

-- =============== CRIAÇÃO DAS TABELAS QUE RECEBEM CHAVE ESTRANGEIRA (FK) ===============

-- ====== TABELAS DO USUÁRIO ======
-- Tabela de Login do Usuário
create table tbl_usuario_login (
id 	    	int not null auto_increment primary key,
email_login	varchar(256) not null,
senha_hash  varchar(512) not null,
id_usuario int not null,

constraint	FK_USUARIO_USUARIOLOGIN
foreign key (id_usuario)
references	tbl_usuario(id)
);

-- Tabela de Administrativo (PRINCIPAL)
create table tbl_administrativo (
id 	       int not null auto_increment primary key,
id_usuario int not null,

constraint	FK_USUARIO_ADMINISTRATIVO
foreign key (id_usuario)
references	tbl_usuario(id)
);

-- Tabela de Gestor (PRINCIPAL)
create table tbl_gestor (
id 	       int not null auto_increment primary key,
id_usuario int not null,

constraint	FK_USUARIO_GESTOR
foreign key (id_usuario)
references	tbl_usuario(id)
);

-- ====== TABELAS DO FUNCIONÁRIO ======
-- Tabela do Funcionário (PRINCIPAL)
create table tbl_funcionario (
id 				  int not null auto_increment primary key,
nome varchar(100) not null,
cpf varchar(18)   not null,
data_contratacao  date not null,
data_nascimento   date not null,
id_sexo 		  int not null,
id_cargo 		  int not null,
id_gestor 		  int not null,

constraint	FK_SEXO_FUNCIONARIO
foreign key	(id_sexo)
references	tbl_sexo(id),

constraint	FK_CARGO_FUNCIONARIO
foreign key	(id_cargo)
references	tbl_cargo(id),

constraint	FK_GESTOR_FUNCIONARIO
foreign key	(id_gestor)
references	tbl_gestor(id)
);

-- Tabela de Avaliação
create table tbl_avaliacao (
id 	       	   int not null auto_increment primary key,
data_avaliacao datetime,
nota 		   decimal(3,1),
observacao 	   text,
id_funcionario int not null,

constraint	FK_FUNCIONARIO_AVALIACAO
foreign key (id_funcionario)
references	tbl_funcionario(id)
);

-- =============== CRIAÇÃO DAS TABELAS INTERMEDIÁRIAS ===============

-- ====== TABELAS DO DEPARTAMENTO ======
-- Tabela de departamento-email
create table tbl_departamento_email (
id 				int not null auto_increment primary key,
id_departamento int not null,
id_email 		int not null,

constraint	FK_DEPARTAMENTO_DEPARTAMENTOEMAIL
foreign key (id_departamento)
references	tbl_departamento(id),

constraint	FK_EMAIL_DEPARTAMENTOEMAIL
foreign key (id_email)
references	tbl_email(id)
);

-- Tabela de departamento-telefone
create table tbl_departamento_telefone (
id 				int not null auto_increment primary key,
id_departamento int not null,
id_telefone 	int not null,

constraint	FK_DEPARTAMENTO_DEPARTAMENTOTELEFONE
foreign key (id_departamento)
references	tbl_departamento(id),

constraint	FK_TELEFONE_DEPARTAMENTOTELEFONE
foreign key (id_telefone)
references	tbl_telefone(id)
);

-- ====== TABELAS DO FUNCIONÁRIO ======
-- Tabela de funcionario-telefone
create table tbl_funcionario_telefone (
id 				int not null auto_increment primary key,
id_funcionario  int not null,
id_telefone 	int not null,

constraint	FK_FUNCIONARIO_FUNCIONARIOTELEFONE
foreign key (id_funcionario)
references	tbl_funcionario(id),

constraint	FK_TELEFONE_FUNCIONARIOTELEFONE
foreign key (id_telefone)
references	tbl_telefone(id)
);

-- Tabela de funcionario-email
create table tbl_funcionario_email (
id 				int not null auto_increment primary key,
id_funcionario  int not null,
id_email 		int not null,

constraint	FK_FUNCIONARIO_FUNCIONARIOEMAIL
foreign key (id_funcionario)
references	tbl_funcionario(id),

constraint	FK_EMAIL_FUNCIONARIOEMAIL
foreign key (id_email)
references	tbl_email(id)
);

-- Tabela de funcao-funcionario
create table tbl_funcao_funcionario (
id 				int not null auto_increment primary key,
id_funcao  		int not null,
id_funcionario	int not null,

constraint	FK_FUNCAO_FUNCAOFUNCIONARIO
foreign key (id_funcao)
references	tbl_funcao(id),

constraint	FK_FUNCIONARIO_FUNCAOFUNCIONARIO
foreign key (id_funcionario)
references	tbl_funcionario(id)
);

-- Tabela de competencia-funcionario
create table tbl_competencia_funcionario (
id 				int not null auto_increment primary key,
id_competencia	int not null,
id_funcionario	int not null,

constraint	FK_COMPETENCIA_COMPETENCIAFUNCIONARIO
foreign key (id_competencia)
references	tbl_competencia(id),

constraint	FK_FUNCIONARIO_COMPETENCIAFUNCIONARIO
foreign key (id_funcionario)
references	tbl_funcionario(id)
);

-- Tabela de meta_organizacional-funcionario
create table tbl_meta_organizacional_funcionario (
id 						int not null auto_increment primary key,
id_meta_organizacional	int not null,
id_funcionario			int not null,

constraint	FK_METAORGANIZACIONAL_METAORGANIZACIONALFUNCIONARIO
foreign key (id_meta_organizacional)
references	tbl_meta_organizacional(id),

constraint	FK_FUNCIONARIO_METAORGANIZACIONALFUNCIONARIO
foreign key (id_funcionario)
references	tbl_funcionario(id)
);

-- ====== TABELA DE RELAÇÃO ENTRE FUNCIONÁRIO E DEPARTAMENTO ======
-- Tabela de funcionario-departamento
create table tbl_funcionario_departamento (
id 				int not null auto_increment primary key,
id_funcionario  int not null,
id_departamento int not null,

constraint	FK_FUNCIONARIO_FUNCIONARIODEPARTAMENTO
foreign key (id_funcionario)
references	tbl_funcionario(id),

constraint	FK_DEPARTAMENTO_FUNCIONARIODEPARTAMENTO
foreign key (id_departamento)
references	tbl_departamento(id)
);