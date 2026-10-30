-- ===========================================================
-- COLABORE - PROCEDURES BASE REVISADAS (MySQL 8+)
-- Execute DEPOIS de 00_ajustes_modelagem_colabore.sql e 01_views_colabore_REVISADO.sql
-- 31 procedures do banco original; extensões de telas abaixo.
-- INSERT -> { id }; UPDATE/DELETE -> { affectedRows }
-- SELECT_ALL e SELECT_BY_ID -> consulta; filtros por FKs quando necessário.
-- ATENÇÃO: só a operação SELECT_BY_EMAIL_LOGIN de procUsuarioLogin
-- retorna senha_hash (uso interno da autenticação; nunca resposta HTTP).
-- As operações UPDATE substituem TODOS os campos da tabela;
-- a API deve enviar valores completos. Não é comportamento PATCH.
-- DELETE respeita as restrições de integridade referencial do banco.
-- Atenção: no modelo visual, fotos são registros independentes com
-- FKs obrigatórias em usuário/funcionário; os dois passos precisam ser
-- coordenados pelo backend em uma transação.
-- ===========================================================

##################### ARQUIVO RESPONSÁVEL PELAS PROCEDURES #####################

### UTILIZE PRIMEIRO O SCRIPT DE CREATE ###
use db_tcc_rh;

-- ====== TABELA DE TBL_TIPO_COMPETENCIA ======
DELIMITER $$
drop procedure if exists procTipoCompetencia $$
create procedure procTipoCompetencia(
    IN operacao varchar(30),
    IN tipo_param varchar(40),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_tipo_competencia (
            tipo
        ) values (
            tipo_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_tipo_competencia
        set
            tipo = tipo_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from tbl_tipo_competencia order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from tbl_tipo_competencia where id = id_param;

    elseif operacao = 'DELETE' then
        delete from tbl_tipo_competencia where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procTipoCompetencia.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_STATUS_COMPETENCIA ======
DELIMITER $$
drop procedure if exists procStatusCompetencia $$
create procedure procStatusCompetencia(
    IN operacao varchar(30),
    IN status_param varchar(40),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_status_competencia (
            status
        ) values (
            status_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_status_competencia
        set
            status = status_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from tbl_status_competencia order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from tbl_status_competencia where id = id_param;

    elseif operacao = 'DELETE' then
        delete from tbl_status_competencia where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procStatusCompetencia.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_TIPO_TELEFONE ======
DELIMITER $$
drop procedure if exists procTipoTelefone $$
create procedure procTipoTelefone(
    IN operacao varchar(30),
    IN tipo_param varchar(15),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_tipo_telefone (
            tipo
        ) values (
            tipo_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_tipo_telefone
        set
            tipo = tipo_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from tbl_tipo_telefone order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from tbl_tipo_telefone where id = id_param;

    elseif operacao = 'DELETE' then
        delete from tbl_tipo_telefone where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procTipoTelefone.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_TIPO_EMAIL ======
DELIMITER $$
drop procedure if exists procTipoEmail $$
create procedure procTipoEmail(
    IN operacao varchar(30),
    IN tipo_param varchar(20),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_tipo_email (
            tipo
        ) values (
            tipo_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_tipo_email
        set
            tipo = tipo_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from tbl_tipo_email order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from tbl_tipo_email where id = id_param;

    elseif operacao = 'DELETE' then
        delete from tbl_tipo_email where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procTipoEmail.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_STATUS_FUNCIONARIO ======
DELIMITER $$
drop procedure if exists procStatusFuncionario $$
create procedure procStatusFuncionario(
    IN operacao varchar(30),
    IN status_param varchar(40),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_status_funcionario (
            status
        ) values (
            status_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_status_funcionario
        set
            status = status_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from tbl_status_funcionario order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from tbl_status_funcionario where id = id_param;

    elseif operacao = 'DELETE' then
        delete from tbl_status_funcionario where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procStatusFuncionario.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_STATUS_META ======
DELIMITER $$
drop procedure if exists procStatusMeta $$
create procedure procStatusMeta(
    IN operacao varchar(30),
    IN status_param varchar(40),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_status_meta (
            status
        ) values (
            status_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_status_meta
        set
            status = status_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from tbl_status_meta order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from tbl_status_meta where id = id_param;

    elseif operacao = 'DELETE' then
        delete from tbl_status_meta where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procStatusMeta.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_SEXO ======
DELIMITER $$
drop procedure if exists procSexo $$
create procedure procSexo(
    IN operacao varchar(30),
    IN sigla_param varchar(3),
    IN sexo_param varchar(15),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_sexo (
            sigla,
            sexo
        ) values (
            sigla_param,
            sexo_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_sexo
        set
            sigla = sigla_param,
            sexo = sexo_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from tbl_sexo order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from tbl_sexo where id = id_param;

    elseif operacao = 'DELETE' then
        delete from tbl_sexo where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procSexo.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_CARGO ======
DELIMITER $$
drop procedure if exists procCargo $$
create procedure procCargo(
    IN operacao varchar(30),
    IN nome_param varchar(65),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_cargo (
            nome
        ) values (
            nome_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_cargo
        set
            nome = nome_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from tbl_cargo order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from tbl_cargo where id = id_param;

    elseif operacao = 'DELETE' then
        delete from tbl_cargo where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procCargo.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_FUNCAO ======
DELIMITER $$
drop procedure if exists procFuncao $$
create procedure procFuncao(
    IN operacao varchar(30),
    IN nome_param varchar(100),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_funcao (
            nome
        ) values (
            nome_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_funcao
        set
            nome = nome_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from tbl_funcao order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from tbl_funcao where id = id_param;

    elseif operacao = 'DELETE' then
        delete from tbl_funcao where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procFuncao.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_DEPARTAMENTO ======
DELIMITER $$
drop procedure if exists procDepartamento $$
create procedure procDepartamento(
    IN operacao varchar(30),
    IN nome_param varchar(100),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_departamento (
            nome
        ) values (
            nome_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_departamento
        set
            nome = nome_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from tbl_departamento order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from tbl_departamento where id = id_param;

    elseif operacao = 'DELETE' then
        delete from tbl_departamento where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procDepartamento.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_FOTO_FUNCIONARIO ======
DELIMITER $$
drop procedure if exists procFotoFuncionario $$
create procedure procFotoFuncionario(
    IN operacao varchar(30),
    IN foto_param varchar(250),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_foto_funcionario (
            foto
        ) values (
            foto_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        if id_param = 1 then signal sqlstate '45000' set message_text='Foto padrão não pode ser alterada.'; end if;
        update tbl_foto_funcionario
        set
            foto = foto_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from tbl_foto_funcionario order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from tbl_foto_funcionario where id = id_param;

    elseif operacao = 'DELETE' then
        if id_param = 1 then signal sqlstate '45000' set message_text='Foto padrão não pode ser excluída.'; end if;
        delete from tbl_foto_funcionario where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procFotoFuncionario.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_FOTO_USUARIO ======
DELIMITER $$
drop procedure if exists procFotoUsuario $$
create procedure procFotoUsuario(
    IN operacao varchar(30),
    IN foto_param varchar(250),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_foto_usuario (
            foto
        ) values (
            foto_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        if id_param = 1 then signal sqlstate '45000' set message_text='Foto padrão não pode ser alterada.'; end if;
        update tbl_foto_usuario
        set
            foto = foto_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from tbl_foto_usuario order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from tbl_foto_usuario where id = id_param;

    elseif operacao = 'DELETE' then
        if id_param = 1 then signal sqlstate '45000' set message_text='Foto padrão não pode ser excluída.'; end if;
        delete from tbl_foto_usuario where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procFotoUsuario.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_TELEFONE ======
DELIMITER $$
drop procedure if exists procTelefone $$
create procedure procTelefone(
    IN operacao varchar(30),
    IN numero_param varchar(25),
    IN id_tipo_telefone_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_telefone (
            numero,
            id_tipo_telefone
        ) values (
            numero_param,
            id_tipo_telefone_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_telefone
        set
            numero = numero_param,
            id_tipo_telefone = id_tipo_telefone_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_telefone order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_telefone where id = id_param;

    elseif operacao = 'SELECT_BY_TIPO_TELEFONE' then
        select * from vw_telefone where id_tipo_telefone = id_tipo_telefone_param order by id desc;

    elseif operacao = 'DELETE' then
        delete from tbl_telefone where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procTelefone.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_EMAIL ======
DELIMITER $$
drop procedure if exists procEmail $$
create procedure procEmail(
    IN operacao varchar(30),
    IN email_param varchar(256),
    IN id_tipo_email_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_email (
            email,
            id_tipo_email
        ) values (
            email_param,
            id_tipo_email_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_email
        set
            email = email_param,
            id_tipo_email = id_tipo_email_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_email order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_email where id = id_param;

    elseif operacao = 'SELECT_BY_TIPO_EMAIL' then
        select * from vw_email where id_tipo_email = id_tipo_email_param order by id desc;

    elseif operacao = 'SELECT_BY_EMAIL' then
        select * from vw_email where email = email_param;

    elseif operacao = 'DELETE' then
        delete from tbl_email where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procEmail.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_USUARIO ======
DELIMITER $$
drop procedure if exists procUsuario $$
create procedure procUsuario(
    IN operacao varchar(30),
    IN nome_param varchar(100),
    IN data_nascimento_param date,
    IN id_foto_usuario_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_usuario (
            nome,
            data_nascimento,
            id_foto_usuario
        ) values (
            nome_param,
            data_nascimento_param,
            coalesce(id_foto_usuario_param, 1)
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_usuario
        set
            nome = nome_param,
            data_nascimento = data_nascimento_param,
            id_foto_usuario = coalesce(id_foto_usuario_param, id_foto_usuario)
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_usuario order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_usuario where id = id_param;

    elseif operacao = 'SELECT_BY_FOTO_USUARIO' then
        select * from vw_usuario where id_foto_usuario = coalesce(id_foto_usuario_param, id_foto_usuario) order by id desc;

    elseif operacao = 'SELECT_BY_NOME' then
        select * from vw_usuario where nome like concat('%', nome_param, '%') order by id desc;

    elseif operacao = 'DELETE' then
        delete from tbl_usuario where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procUsuario.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_USUARIO_LOGIN ======
DELIMITER $$
drop procedure if exists procUsuarioLogin $$
create procedure procUsuarioLogin(
    IN operacao varchar(30),
    IN email_login_param varchar(256),
    IN senha_hash_param varchar(512),
    IN id_usuario_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_usuario_login (
            email_login,
            senha_hash,
            id_usuario
        ) values (
            email_login_param,
            senha_hash_param,
            id_usuario_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_usuario_login
        set
            email_login = email_login_param,
            senha_hash = senha_hash_param,
            id_usuario = id_usuario_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select id, email_login, id_usuario, nome_usuario from vw_usuario_login order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select id, email_login, id_usuario, nome_usuario from vw_usuario_login where id = id_param;

    elseif operacao = 'SELECT_BY_USUARIO' then
        select id, email_login, id_usuario, nome_usuario from vw_usuario_login where id_usuario = id_usuario_param order by id desc;

    elseif operacao = 'UPDATE_EMAIL' then
        update tbl_usuario_login set email_login=email_login_param where id=id_param;
        select row_count() as affectedRows;

    elseif operacao = 'UPDATE_SENHA' then
        update tbl_usuario_login set senha_hash=senha_hash_param where id=id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_BY_EMAIL_LOGIN' then
        select id, email_login, senha_hash, id_usuario
        from tbl_usuario_login
        where email_login = email_login_param;

    elseif operacao = 'DELETE' then
        delete from tbl_usuario_login where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procUsuarioLogin.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_ADMINISTRATIVO ======
DELIMITER $$
drop procedure if exists procAdministrativo $$
create procedure procAdministrativo(
    IN operacao varchar(30),
    IN id_usuario_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_administrativo (
            id_usuario
        ) values (
            id_usuario_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_administrativo
        set
            id_usuario = id_usuario_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_administrativo order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_administrativo where id = id_param;

    elseif operacao = 'SELECT_BY_USUARIO' then
        select * from vw_administrativo where id_usuario = id_usuario_param order by id desc;

    elseif operacao = 'DELETE' then
        delete from tbl_administrativo where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procAdministrativo.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_GESTOR ======
DELIMITER $$
drop procedure if exists procGestor $$
create procedure procGestor(
    IN operacao varchar(30),
    IN id_usuario_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_gestor (
            id_usuario
        ) values (
            id_usuario_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_gestor
        set
            id_usuario = id_usuario_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_gestor order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_gestor where id = id_param;

    elseif operacao = 'SELECT_BY_USUARIO' then
        select * from vw_gestor where id_usuario = id_usuario_param order by id desc;

    elseif operacao = 'DELETE' then
        delete from tbl_gestor where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procGestor.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_USUARIO_TELEFONE ======
DELIMITER $$
drop procedure if exists procUsuarioTelefone $$
create procedure procUsuarioTelefone(
    IN operacao varchar(30),
    IN id_usuario_param int,
    IN id_telefone_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_usuario_telefone (
            id_usuario,
            id_telefone
        ) values (
            id_usuario_param,
            id_telefone_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_usuario_telefone
        set
            id_usuario = id_usuario_param,
            id_telefone = id_telefone_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_usuario_telefone order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_usuario_telefone where id = id_param;

    elseif operacao = 'SELECT_BY_USUARIO' then
        select * from vw_usuario_telefone where id_usuario = id_usuario_param order by id desc;

    elseif operacao = 'SELECT_BY_TELEFONE' then
        select * from vw_usuario_telefone where id_telefone = id_telefone_param order by id desc;

    elseif operacao = 'DELETE' then
        delete from tbl_usuario_telefone where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procUsuarioTelefone.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_COMPETENCIA ======
DELIMITER $$
drop procedure if exists procCompetencia $$
create procedure procCompetencia(
    IN operacao varchar(30),
    IN descricao_param varchar(100),
    IN nivel_esperado_param decimal(4,2),
    IN data_ultima_avaliacao_param date,
    IN id_tipo_competencia_param int,
    IN id_status_competencia_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_competencia (
            descricao,
            nivel_esperado,
            data_ultima_avaliacao,
            id_tipo_competencia,
            id_status_competencia
        ) values (
            descricao_param,
            nivel_esperado_param,
            data_ultima_avaliacao_param,
            id_tipo_competencia_param,
            id_status_competencia_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_competencia
        set
            descricao = descricao_param,
            nivel_esperado = nivel_esperado_param,
            data_ultima_avaliacao = data_ultima_avaliacao_param,
            id_tipo_competencia = id_tipo_competencia_param,
            id_status_competencia = id_status_competencia_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_competencia order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_competencia where id = id_param;

    elseif operacao = 'SELECT_BY_TIPO_COMPETENCIA' then
        select * from vw_competencia where id_tipo_competencia = id_tipo_competencia_param order by id desc;

    elseif operacao = 'SELECT_BY_STATUS_COMPETENCIA' then
        select * from vw_competencia where id_status_competencia = id_status_competencia_param order by id desc;

    elseif operacao = 'DELETE' then
        if exists (select 1 from tbl_avaliacao_competencia where id_competencia = id_param) then
            signal sqlstate '45000' set message_text = 'Competência possui histórico de avaliações e não pode ser excluída.';
        end if;
        delete from tbl_competencia where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procCompetencia.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_META_ORGANIZACIONAL ======
DELIMITER $$
drop procedure if exists procMetaOrganizacional $$
create procedure procMetaOrganizacional(
    IN operacao varchar(30),
    IN titulo_param varchar(150),
    IN prazo_param date,
    IN descricao_param text,
    IN id_status_meta_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_meta_organizacional (
            titulo,
            prazo,
            descricao,
            id_status_meta
        ) values (
            titulo_param,
            prazo_param,
            descricao_param,
            id_status_meta_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_meta_organizacional
        set
            titulo = titulo_param,
            prazo = prazo_param,
            descricao = descricao_param,
            id_status_meta = id_status_meta_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_meta_organizacional order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_meta_organizacional where id = id_param;

    elseif operacao = 'SELECT_BY_STATUS_META' then
        select * from vw_meta_organizacional where id_status_meta = id_status_meta_param order by id desc;

    elseif operacao = 'DELETE' then
        if exists (select 1 from tbl_meta_progresso where id_meta_organizacional = id_param) then
            signal sqlstate '45000' set message_text = 'Meta possui histórico de progresso e não pode ser excluída.';
        end if;
        delete from tbl_meta_organizacional where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procMetaOrganizacional.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_FUNCIONARIO ======
DELIMITER $$
drop procedure if exists procFuncionario $$
create procedure procFuncionario(
    IN operacao varchar(30),
    IN nome_social_param varchar(100),
    IN nome_param varchar(100),
    IN cpf_param varchar(18),
    IN data_contratacao_param date,
    IN data_nascimento_param date,
    IN numero_matricula_param int,
    IN id_sexo_param int,
    IN id_cargo_param int,
    IN id_gestor_param int,
    IN id_foto_funcionario_param int,
    IN id_status_funcionario_param int,
    IN id_departamento_param int,
    IN id_param int
)
BEGIN
    declare id_funcionario_criado int;
    declare id_status_inativo int default null;
    declare linhas_afetadas int default 0;
    declare exit handler for sqlexception
    begin
        rollback;
        resignal;
    end;

    if operacao = 'INSERT' then
        if id_departamento_param is null then
            signal sqlstate '45000' set message_text = 'Departamento é obrigatório no cadastro do funcionário.';
        end if;
        start transaction;
        insert into tbl_funcionario (
            nome_social, nome, cpf, data_contratacao, data_nascimento,
            numero_matricula, id_sexo, id_cargo, id_gestor,
            id_foto_funcionario, id_status_funcionario
        ) values (
            nome_social_param, nome_param, cpf_param, data_contratacao_param,
            data_nascimento_param, numero_matricula_param, id_sexo_param,
            id_cargo_param, id_gestor_param, coalesce(id_foto_funcionario_param, 1),
            id_status_funcionario_param
        );
        set id_funcionario_criado = last_insert_id();
        insert into tbl_funcionario_departamento (id_funcionario, id_departamento)
        values (id_funcionario_criado, id_departamento_param);
        commit;
        select id_funcionario_criado as id;

    elseif operacao = 'UPDATE' then
        start transaction;
        update tbl_funcionario
        set nome_social = nome_social_param,
            nome = nome_param,
            cpf = cpf_param,
            data_contratacao = data_contratacao_param,
            data_nascimento = data_nascimento_param,
            numero_matricula = numero_matricula_param,
            id_sexo = id_sexo_param,
            id_cargo = id_cargo_param,
            id_gestor = id_gestor_param,
            id_foto_funcionario = coalesce(id_foto_funcionario_param, id_foto_funcionario),
            id_status_funcionario = id_status_funcionario_param
        where id = id_param;
        set linhas_afetadas = row_count();
        -- O vínculo com departamento continua pela procFuncionarioDepartamento.
        commit;
        select linhas_afetadas as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_lista_colaboradores order by id desc;
    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_lista_colaboradores where id = id_param;
    elseif operacao = 'SELECT_BY_SEXO' then
        select * from vw_lista_colaboradores where id_sexo = id_sexo_param order by id desc;
    elseif operacao = 'SELECT_BY_CARGO' then
        select * from vw_lista_colaboradores where id_cargo = id_cargo_param order by id desc;
    elseif operacao = 'SELECT_BY_GESTOR' then
        select * from vw_lista_colaboradores where id_gestor = id_gestor_param order by id desc;
    elseif operacao = 'SELECT_BY_FOTO_FUNCIONARIO' then
        select * from vw_lista_colaboradores where id_foto_funcionario = id_foto_funcionario_param order by id desc;
    elseif operacao = 'SELECT_BY_STATUS_FUNCIONARIO' then
        select * from vw_lista_colaboradores where id_status_funcionario = id_status_funcionario_param order by id desc;
    elseif operacao = 'SELECT_BY_CPF' then
        select * from vw_lista_colaboradores where cpf = cpf_param;
    elseif operacao = 'SELECT_BY_MATRICULA' then
        select * from vw_lista_colaboradores where numero_matricula = numero_matricula_param;
    elseif operacao = 'SELECT_BY_NOME' then
        select * from vw_lista_colaboradores where nome like concat('%', nome_param, '%') order by id desc;
    elseif operacao = 'SELECT_BY_DEPARTAMENTO' then
        select * from vw_lista_colaboradores v
        where exists (select 1 from tbl_funcionario_departamento fd
                      where fd.id_funcionario = v.id and fd.id_departamento = id_departamento_param)
        order by v.id desc;

    elseif operacao = 'DELETE' or operacao = 'INATIVAR' then
        -- Exclusão lógica para preservar avaliações, metas e indicadores.
        select id into id_status_inativo
        from tbl_status_funcionario
        where lower(status) in ('inativo', 'desligado')
        order by case when lower(status) = 'inativo' then 0 else 1 end
        limit 1;
        if id_status_inativo is null then
            signal sqlstate '45000' set message_text = 'Cadastre um status Inativo ou Desligado antes de inativar.';
        end if;
        update tbl_funcionario
        set id_status_funcionario = id_status_inativo,
            data_desligamento = coalesce(data_desligamento, curdate())
        where id = id_param;
        select row_count() as affectedRows;
    else
        signal sqlstate '45000' set message_text = 'Operação inválida na procFuncionario.';
    end if;
END $$

DELIMITER ;


-- ====== TABELA DE TBL_AVALIACAO ======
DELIMITER $$
drop procedure if exists procAvaliacao $$
create procedure procAvaliacao(
    IN operacao varchar(30),
    IN data_avaliacao_param datetime,
    IN nota_param decimal(3,1),
    IN observacao_param text,
    IN id_funcionario_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        signal sqlstate '45000' set message_text = 'Use procAvaliacaoFluxo para cadastrar com período e avaliador.';
    elseif operacao = 'UPDATE' then
        signal sqlstate '45000' set message_text = 'Use procAvaliacaoFluxo para registrar e concluir avaliações.';
    elseif operacao = 'SELECT_ALL' then
        select * from vw_avaliacao_tela order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_avaliacao_tela where id = id_param;

    elseif operacao = 'SELECT_BY_FUNCIONARIO' then
        select * from vw_avaliacao_tela where id_funcionario = id_funcionario_param order by id desc;

    elseif operacao = 'DELETE' then
        signal sqlstate '45000' set message_text = 'Histórico de avaliações não pode ser excluído (RN11).';

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procAvaliacao.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_FUNCAO_FUNCIONARIO ======
DELIMITER $$
drop procedure if exists procFuncaoFuncionario $$
create procedure procFuncaoFuncionario(
    IN operacao varchar(30),
    IN id_funcao_param int,
    IN id_funcionario_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_funcao_funcionario (
            id_funcao,
            id_funcionario
        ) values (
            id_funcao_param,
            id_funcionario_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_funcao_funcionario
        set
            id_funcao = id_funcao_param,
            id_funcionario = id_funcionario_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_funcao_funcionario order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_funcao_funcionario where id = id_param;

    elseif operacao = 'SELECT_BY_FUNCAO' then
        select * from vw_funcao_funcionario where id_funcao = id_funcao_param order by id desc;

    elseif operacao = 'SELECT_BY_FUNCIONARIO' then
        select * from vw_funcao_funcionario where id_funcionario = id_funcionario_param order by id desc;

    elseif operacao = 'DELETE' then
        delete from tbl_funcao_funcionario where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procFuncaoFuncionario.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_COMPETENCIA_FUNCIONARIO ======
DELIMITER $$
drop procedure if exists procCompetenciaFuncionario $$
create procedure procCompetenciaFuncionario(
    IN operacao varchar(30),
    IN id_competencia_param int,
    IN id_funcionario_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_competencia_funcionario (
            id_competencia,
            id_funcionario
        ) values (
            id_competencia_param,
            id_funcionario_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_competencia_funcionario
        set
            id_competencia = id_competencia_param,
            id_funcionario = id_funcionario_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_competencia_funcionario order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_competencia_funcionario where id = id_param;

    elseif operacao = 'SELECT_BY_COMPETENCIA' then
        select * from vw_competencia_funcionario where id_competencia = id_competencia_param order by id desc;

    elseif operacao = 'SELECT_BY_FUNCIONARIO' then
        select * from vw_competencia_funcionario where id_funcionario = id_funcionario_param order by id desc;

    elseif operacao = 'DELETE' then
        delete from tbl_competencia_funcionario where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procCompetenciaFuncionario.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_META_ORGANIZACIONAL_FUNCIONARIO ======
DELIMITER $$
drop procedure if exists procMetaOrganizacionalFuncionario $$
create procedure procMetaOrganizacionalFuncionario(
    IN operacao varchar(30),
    IN id_meta_organizacional_param int,
    IN id_funcionario_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_meta_organizacional_funcionario (
            id_meta_organizacional,
            id_funcionario
        ) values (
            id_meta_organizacional_param,
            id_funcionario_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_meta_organizacional_funcionario
        set
            id_meta_organizacional = id_meta_organizacional_param,
            id_funcionario = id_funcionario_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_meta_organizacional_funcionario order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_meta_organizacional_funcionario where id = id_param;

    elseif operacao = 'SELECT_BY_META_ORGANIZACIONAL' then
        select * from vw_meta_organizacional_funcionario where id_meta_organizacional = id_meta_organizacional_param order by id desc;

    elseif operacao = 'SELECT_BY_FUNCIONARIO' then
        select * from vw_meta_organizacional_funcionario where id_funcionario = id_funcionario_param order by id desc;

    elseif operacao = 'DELETE' then
        delete from tbl_meta_organizacional_funcionario where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procMetaOrganizacionalFuncionario.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_FUNCIONARIO_DEPARTAMENTO ======
DELIMITER $$
drop procedure if exists procFuncionarioDepartamento $$
create procedure procFuncionarioDepartamento(
    IN operacao varchar(30),
    IN id_funcionario_param int,
    IN id_departamento_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_funcionario_departamento (
            id_funcionario,
            id_departamento
        ) values (
            id_funcionario_param,
            id_departamento_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        if id_funcionario_param is null or id_departamento_param is null then
            signal sqlstate '45000' set message_text='Informe funcionário e departamento.';
        end if;
        update tbl_funcionario_departamento
        set
            id_funcionario = id_funcionario_param,
            id_departamento = id_departamento_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_funcionario_departamento order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_funcionario_departamento where id = id_param;

    elseif operacao = 'SELECT_BY_FUNCIONARIO' then
        select * from vw_funcionario_departamento where id_funcionario = id_funcionario_param order by id desc;

    elseif operacao = 'SELECT_BY_DEPARTAMENTO' then
        select * from vw_funcionario_departamento where id_departamento = id_departamento_param order by id desc;

    elseif operacao = 'DELETE' then
        if (select count(*) from tbl_funcionario_departamento
            where id_funcionario=(select id_funcionario from tbl_funcionario_departamento where id=id_param)) <= 1
            and exists (select 1 from tbl_funcionario_departamento where id=id_param) then
            signal sqlstate '45000' set message_text='Funcionário precisa permanecer vinculado a pelo menos um departamento.';
        end if;
        delete from tbl_funcionario_departamento where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procFuncionarioDepartamento.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_FUNCIONARIO_TELEFONE ======
DELIMITER $$
drop procedure if exists procFuncionarioTelefone $$
create procedure procFuncionarioTelefone(
    IN operacao varchar(30),
    IN id_funcionario_param int,
    IN id_telefone_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_funcionario_telefone (
            id_funcionario,
            id_telefone
        ) values (
            id_funcionario_param,
            id_telefone_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_funcionario_telefone
        set
            id_funcionario = id_funcionario_param,
            id_telefone = id_telefone_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_funcionario_telefone order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_funcionario_telefone where id = id_param;

    elseif operacao = 'SELECT_BY_FUNCIONARIO' then
        select * from vw_funcionario_telefone where id_funcionario = id_funcionario_param order by id desc;

    elseif operacao = 'SELECT_BY_TELEFONE' then
        select * from vw_funcionario_telefone where id_telefone = id_telefone_param order by id desc;

    elseif operacao = 'DELETE' then
        delete from tbl_funcionario_telefone where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procFuncionarioTelefone.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_FUNCIONARIO_EMAIL ======
DELIMITER $$
drop procedure if exists procFuncionarioEmail $$
create procedure procFuncionarioEmail(
    IN operacao varchar(30),
    IN id_funcionario_param int,
    IN id_email_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_funcionario_email (
            id_funcionario,
            id_email
        ) values (
            id_funcionario_param,
            id_email_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_funcionario_email
        set
            id_funcionario = id_funcionario_param,
            id_email = id_email_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_funcionario_email order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_funcionario_email where id = id_param;

    elseif operacao = 'SELECT_BY_FUNCIONARIO' then
        select * from vw_funcionario_email where id_funcionario = id_funcionario_param order by id desc;

    elseif operacao = 'SELECT_BY_EMAIL' then
        select * from vw_funcionario_email where id_email = id_email_param order by id desc;

    elseif operacao = 'DELETE' then
        delete from tbl_funcionario_email where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procFuncionarioEmail.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_DEPARTAMENTO_TELEFONE ======
DELIMITER $$
drop procedure if exists procDepartamentoTelefone $$
create procedure procDepartamentoTelefone(
    IN operacao varchar(30),
    IN id_departamento_param int,
    IN id_telefone_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_departamento_telefone (
            id_departamento,
            id_telefone
        ) values (
            id_departamento_param,
            id_telefone_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_departamento_telefone
        set
            id_departamento = id_departamento_param,
            id_telefone = id_telefone_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_departamento_telefone order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_departamento_telefone where id = id_param;

    elseif operacao = 'SELECT_BY_DEPARTAMENTO' then
        select * from vw_departamento_telefone where id_departamento = id_departamento_param order by id desc;

    elseif operacao = 'SELECT_BY_TELEFONE' then
        select * from vw_departamento_telefone where id_telefone = id_telefone_param order by id desc;

    elseif operacao = 'DELETE' then
        delete from tbl_departamento_telefone where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procDepartamentoTelefone.';
    end if;
END $$
DELIMITER ;


-- ====== TABELA DE TBL_DEPARTAMENTO_EMAIL ======
DELIMITER $$
drop procedure if exists procDepartamentoEmail $$
create procedure procDepartamentoEmail(
    IN operacao varchar(30),
    IN id_departamento_param int,
    IN id_email_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        insert into tbl_departamento_email (
            id_departamento,
            id_email
        ) values (
            id_departamento_param,
            id_email_param
        );
        select last_insert_id() as id;

    elseif operacao = 'UPDATE' then
        update tbl_departamento_email
        set
            id_departamento = id_departamento_param,
            id_email = id_email_param
        where id = id_param;
        select row_count() as affectedRows;

    elseif operacao = 'SELECT_ALL' then
        select * from vw_departamento_email order by id desc;

    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_departamento_email where id = id_param;

    elseif operacao = 'SELECT_BY_DEPARTAMENTO' then
        select * from vw_departamento_email where id_departamento = id_departamento_param order by id desc;

    elseif operacao = 'SELECT_BY_EMAIL' then
        select * from vw_departamento_email where id_email = id_email_param order by id desc;

    elseif operacao = 'DELETE' then
        delete from tbl_departamento_email where id = id_param;
        select row_count() as affectedRows;

    else
        signal sqlstate '45000'
        set message_text = 'Operação inválida na procDepartamentoEmail.';
    end if;
END $$
DELIMITER ;

-- ====== TABELA TBL_AVALIACAO_COMPETENCIA ======
DELIMITER $$
drop procedure if exists procAvaliacaoCompetencia $$
create procedure procAvaliacaoCompetencia(
    IN operacao varchar(30),
    IN id_avaliacao_param int,
    IN id_competencia_param int,
    IN nota_param decimal(3,1),
    IN observacao_param text,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' or operacao = 'UPDATE' then
        signal sqlstate '45000' set message_text = 'Use procRegistrarNotaCompetencia para preservar o histórico.';
    elseif operacao = 'SELECT_ALL' then
            select * from vw_avaliacao_competencia_tela order by id desc;
        elseif operacao = 'SELECT_BY_ID' then
            select * from vw_avaliacao_competencia_tela where id = id_param;
        elseif operacao = 'SELECT_BY_AVALIACAO' then
            select * from vw_avaliacao_competencia_tela where id_avaliacao = id_avaliacao_param order by id desc;
        elseif operacao = 'DELETE' then
            signal sqlstate '45000' set message_text = 'Histórico protegido contra exclusão.';
        else
            signal sqlstate '45000' set message_text = 'Operação inválida na procAvaliacaoCompetencia.';
        end if;
END $$
DELIMITER ;


-- ====== TABELA TBL_JORNADA_FUNCIONARIO ======
DELIMITER $$
drop procedure if exists procJornadaFuncionario $$
create procedure procJornadaFuncionario(
    IN operacao varchar(30),
    IN id_funcionario_param int,
    IN horas_semanais_param decimal(5,2),
    IN vigente_desde_param date,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then

            insert into tbl_jornada_funcionario (
                id_funcionario,
                horas_semanais,
                vigente_desde
            ) values (
                id_funcionario_param,
                horas_semanais_param,
                vigente_desde_param
            );
            select last_insert_id() as id;
        elseif operacao = 'UPDATE' then

            update tbl_jornada_funcionario set
                id_funcionario = id_funcionario_param,
                horas_semanais = horas_semanais_param,
                vigente_desde = vigente_desde_param
            where id = id_param;
            select row_count() as affectedRows;
        elseif operacao = 'SELECT_ALL' then
            select * from tbl_jornada_funcionario order by id desc;
        elseif operacao = 'SELECT_BY_ID' then
            select * from tbl_jornada_funcionario where id = id_param;
        elseif operacao = 'SELECT_BY_FUNCIONARIO' then
            select * from tbl_jornada_funcionario where id_funcionario = id_funcionario_param order by id desc;
        elseif operacao = 'DELETE' then
            delete from tbl_jornada_funcionario where id = id_param;
            select row_count() as affectedRows;
        else
            signal sqlstate '45000' set message_text = 'Operação inválida na procJornadaFuncionario.';
        end if;
END $$
DELIMITER ;


-- ====== TABELA TBL_ATIVIDADE_TRABALHO ======
DELIMITER $$
drop procedure if exists procAtividadeTrabalho $$
create procedure procAtividadeTrabalho(
    IN operacao varchar(30),
    IN id_funcionario_param int,
    IN id_usuario_responsavel_param int,
    IN titulo_param varchar(150),
    IN descricao_param text,
    IN quantidade_tarefas_param int,
    IN horas_previstas_param decimal(7,2),
    IN semana_referencia_param date,
    IN status_param varchar(25),
    IN data_conclusao_param datetime,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then

            insert into tbl_atividade_trabalho (
                id_funcionario,
                id_usuario_responsavel,
                titulo,
                descricao,
                quantidade_tarefas,
                horas_previstas,
                semana_referencia,
                status,
                data_conclusao
            ) values (
                id_funcionario_param,
                id_usuario_responsavel_param,
                titulo_param,
                descricao_param,
                quantidade_tarefas_param,
                horas_previstas_param,
                semana_referencia_param,
                status_param,
                data_conclusao_param
            );
            select last_insert_id() as id;
        elseif operacao = 'UPDATE' then

            update tbl_atividade_trabalho set
                id_funcionario = id_funcionario_param,
                id_usuario_responsavel = id_usuario_responsavel_param,
                titulo = titulo_param,
                descricao = descricao_param,
                quantidade_tarefas = quantidade_tarefas_param,
                horas_previstas = horas_previstas_param,
                semana_referencia = semana_referencia_param,
                status = status_param,
                data_conclusao = data_conclusao_param
            where id = id_param;
            select row_count() as affectedRows;
        elseif operacao = 'SELECT_ALL' then
            select * from tbl_atividade_trabalho order by id desc;
        elseif operacao = 'SELECT_BY_ID' then
            select * from tbl_atividade_trabalho where id = id_param;
        elseif operacao = 'SELECT_BY_FUNCIONARIO' then
            select * from tbl_atividade_trabalho where id_funcionario = id_funcionario_param order by id desc;
        elseif operacao = 'DELETE' then
            delete from tbl_atividade_trabalho where id = id_param;
            select row_count() as affectedRows;
        else
            signal sqlstate '45000' set message_text = 'Operação inválida na procAtividadeTrabalho.';
        end if;
END $$
DELIMITER ;


-- ====== TABELA TBL_APONTAMENTO_HORAS ======
DELIMITER $$
drop procedure if exists procApontamentoHoras $$
create procedure procApontamentoHoras(
    IN operacao varchar(30),
    IN id_funcionario_param int,
    IN id_usuario_registro_param int,
    IN semana_referencia_param date,
    IN horas_trabalhadas_param decimal(7,2),
    IN horas_extras_param decimal(7,2),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then

            insert into tbl_apontamento_horas (
                id_funcionario,
                id_usuario_registro,
                semana_referencia,
                horas_trabalhadas,
                horas_extras
            ) values (
                id_funcionario_param,
                id_usuario_registro_param,
                semana_referencia_param,
                horas_trabalhadas_param,
                horas_extras_param
            );
            select last_insert_id() as id;
        elseif operacao = 'UPDATE' then

            update tbl_apontamento_horas set
                id_funcionario = id_funcionario_param,
                id_usuario_registro = id_usuario_registro_param,
                semana_referencia = semana_referencia_param,
                horas_trabalhadas = horas_trabalhadas_param,
                horas_extras = horas_extras_param
            where id = id_param;
            select row_count() as affectedRows;
        elseif operacao = 'SELECT_ALL' then
            select * from tbl_apontamento_horas order by id desc;
        elseif operacao = 'SELECT_BY_ID' then
            select * from tbl_apontamento_horas where id = id_param;
        elseif operacao = 'SELECT_BY_FUNCIONARIO' then
            select * from tbl_apontamento_horas where id_funcionario = id_funcionario_param order by id desc;
        elseif operacao = 'DELETE' then
            delete from tbl_apontamento_horas where id = id_param;
            select row_count() as affectedRows;
        else
            signal sqlstate '45000' set message_text = 'Operação inválida na procApontamentoHoras.';
        end if;
END $$
DELIMITER ;


-- ====== TABELA TBL_META_DEPARTAMENTO ======
DELIMITER $$
drop procedure if exists procMetaDepartamento $$
create procedure procMetaDepartamento(
    IN operacao varchar(30),
    IN id_meta_organizacional_param int,
    IN id_departamento_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then

            insert into tbl_meta_departamento (
                id_meta_organizacional,
                id_departamento
            ) values (
                id_meta_organizacional_param,
                id_departamento_param
            );
            select last_insert_id() as id;
        elseif operacao = 'UPDATE' then

            update tbl_meta_departamento set
                id_meta_organizacional = id_meta_organizacional_param,
                id_departamento = id_departamento_param
            where id = id_param;
            select row_count() as affectedRows;
        elseif operacao = 'SELECT_ALL' then
            select * from tbl_meta_departamento order by id desc;
        elseif operacao = 'SELECT_BY_ID' then
            select * from tbl_meta_departamento where id = id_param;
        elseif operacao = 'SELECT_BY_DEPARTAMENTO' then
            select * from tbl_meta_departamento where id_departamento = id_departamento_param order by id desc;
        elseif operacao = 'DELETE' then
            delete from tbl_meta_departamento where id = id_param;
            select row_count() as affectedRows;
        else
            signal sqlstate '45000' set message_text = 'Operação inválida na procMetaDepartamento.';
        end if;
END $$
DELIMITER ;


-- ====== TABELA TBL_META_PROGRESSO ======
DELIMITER $$
drop procedure if exists procMetaProgresso $$
create procedure procMetaProgresso(
    IN operacao varchar(30),
    IN id_meta_organizacional_param int,
    IN id_usuario_responsavel_param int,
    IN percentual_param decimal(5,2),
    IN observacao_param text,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' or operacao = 'UPDATE' then
        signal sqlstate '45000' set message_text = 'Use procAtualizarProgressoMeta para preservar o histórico.';
    elseif operacao = 'SELECT_ALL' then
            select * from vw_meta_progresso_historico order by id desc;
        elseif operacao = 'SELECT_BY_ID' then
            select * from vw_meta_progresso_historico where id = id_param;
        elseif operacao = 'SELECT_BY_META_ORGANIZACIONAL' then
            select * from vw_meta_progresso_historico where id_meta_organizacional = id_meta_organizacional_param order by id desc;
        elseif operacao = 'DELETE' then
            signal sqlstate '45000' set message_text = 'Histórico protegido contra exclusão.';
        else
            signal sqlstate '45000' set message_text = 'Operação inválida na procMetaProgresso.';
        end if;
END $$
DELIMITER ;


-- ====== TABELA TBL_USUARIO_EMAIL ======
DELIMITER $$
drop procedure if exists procUsuarioEmail $$
create procedure procUsuarioEmail(
    IN operacao varchar(30),
    IN id_usuario_param int,
    IN id_email_param int,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then

            insert into tbl_usuario_email (
                id_usuario,
                id_email
            ) values (
                id_usuario_param,
                id_email_param
            );
            select last_insert_id() as id;
        elseif operacao = 'UPDATE' then

            update tbl_usuario_email set
                id_usuario = id_usuario_param,
                id_email = id_email_param
            where id = id_param;
            select row_count() as affectedRows;
        elseif operacao = 'SELECT_ALL' then
            select * from vw_usuario_email order by id desc;
        elseif operacao = 'SELECT_BY_ID' then
            select * from vw_usuario_email where id = id_param;
        elseif operacao = 'SELECT_BY_USUARIO' then
            select * from vw_usuario_email where id_usuario = id_usuario_param order by id desc;
        elseif operacao = 'DELETE' then
            delete from tbl_usuario_email where id = id_param;
            select row_count() as affectedRows;
        else
            signal sqlstate '45000' set message_text = 'Operação inválida na procUsuarioEmail.';
        end if;
END $$
DELIMITER ;


-- ====== TABELA TBL_CONFIGURACAO_INDICADORES ======
DELIMITER $$
drop procedure if exists procConfiguracaoIndicadores $$
create procedure procConfiguracaoIndicadores(
    IN operacao varchar(30),
    IN limite_sobrecarga_param decimal(6,2),
    IN limite_baixo_desempenho_param decimal(4,2),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then

            insert into tbl_configuracao_indicadores (
                limite_sobrecarga,
                limite_baixo_desempenho
            ) values (
                limite_sobrecarga_param,
                limite_baixo_desempenho_param
            );
            select last_insert_id() as id;
        elseif operacao = 'UPDATE' then

            update tbl_configuracao_indicadores set
                limite_sobrecarga = limite_sobrecarga_param,
                limite_baixo_desempenho = limite_baixo_desempenho_param
            where id = id_param;
            select row_count() as affectedRows;
        elseif operacao = 'SELECT_ALL' then
            select * from tbl_configuracao_indicadores order by id desc;
        elseif operacao = 'SELECT_BY_ID' then
            select * from tbl_configuracao_indicadores where id = id_param;
        elseif operacao = 'DELETE' then
            signal sqlstate '45000' set message_text = 'A configuração principal não pode ser excluída.';
        else
            signal sqlstate '45000' set message_text = 'Operação inválida na procConfiguracaoIndicadores.';
        end if;
END $$
DELIMITER ;


-- ====== TABELA TBL_INDICADOR_HISTORICO ======
DELIMITER $$
drop procedure if exists procIndicadorHistorico $$
create procedure procIndicadorHistorico(
    IN operacao varchar(30),
    IN id_funcionario_param int,
    IN semana_referencia_param date,
    IN indice_sobrecarga_param decimal(7,2),
    IN desempenho_medio_param decimal(4,2),
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        signal sqlstate '45000' set message_text = 'Use procedure de fluxo para registrar histórico.';

        elseif operacao = 'UPDATE' then
        signal sqlstate '45000' set message_text = 'Use procedure de fluxo para registrar histórico.';

        elseif operacao = 'SELECT_ALL' then
            select * from vw_indicadores_historico order by id desc;
        elseif operacao = 'SELECT_BY_ID' then
            select * from vw_indicadores_historico where id = id_param;
        elseif operacao = 'SELECT_BY_FUNCIONARIO' then
            select * from vw_indicadores_historico where id_funcionario = id_funcionario_param order by id desc;
        elseif operacao = 'DELETE' then
            signal sqlstate '45000' set message_text = 'Histórico protegido contra exclusão.';
        else
            signal sqlstate '45000' set message_text = 'Operação inválida na procIndicadorHistorico.';
        end if;
END $$
DELIMITER ;


-- ====== TABELA TBL_AUDITORIA ======
DELIMITER $$
drop procedure if exists procAuditoria $$
create procedure procAuditoria(
    IN operacao varchar(30),
    IN id_usuario_param int,
    IN entidade_param varchar(80),
    IN id_registro_param int,
    IN operacao_registro_param varchar(30),
    IN dados_anteriores_param json,
    IN dados_novos_param json,
    IN id_param int
)
BEGIN
    if operacao = 'INSERT' then
        signal sqlstate '45000' set message_text = 'Use procedure de fluxo para registrar histórico.';

        elseif operacao = 'UPDATE' then
        signal sqlstate '45000' set message_text = 'Use procedure de fluxo para registrar histórico.';

        elseif operacao = 'SELECT_ALL' then
            select * from vw_auditoria order by id desc;
        elseif operacao = 'SELECT_BY_ID' then
            select * from vw_auditoria where id = id_param;
        elseif operacao = 'SELECT_BY_USUARIO' then
            select * from vw_auditoria where id_usuario = id_usuario_param order by id desc;
        elseif operacao = 'DELETE' then
            signal sqlstate '45000' set message_text = 'Histórico protegido contra exclusão.';
        else
            signal sqlstate '45000' set message_text = 'Operação inválida na procAuditoria.';
        end if;
END $$
DELIMITER ;


-- ====== FLUXO DE AVALIAÇÕES POR COMPETÊNCIA - SLIDE 16 ======
DELIMITER $$
drop procedure if exists procAvaliacaoFluxo $$
create procedure procAvaliacaoFluxo(
    IN operacao varchar(30),
    IN id_avaliacao_param int,
    IN id_funcionario_param int,
    IN id_avaliador_param int,
    IN data_inicio_param date,
    IN data_fim_param date,
    IN prazo_param date,
    IN observacao_param text
)
BEGIN
    declare id_novo int;
    declare qtd_pendentes int;
    declare qtd_total int;
    declare media_final decimal(3,1);
    declare status_atual varchar(25);
    declare exit handler for sqlexception
    begin
        rollback;
        resignal;
    end;
    if operacao in ('INSERT','CONCLUIR') and not exists
        (select 1 from tbl_administrativo where id_usuario=id_avaliador_param
         union all
         select 1 from tbl_gestor where id_usuario=id_avaliador_param) then
        signal sqlstate '45000' set message_text='Avaliador não possui perfil autorizado.';
    end if;
    if operacao = 'INSERT' and not exists
        (select 1 from vw_escopo_funcionario
         where id_usuario=id_avaliador_param and id_funcionario=id_funcionario_param) then
        signal sqlstate '45000' set message_text='Funcionário fora do escopo do avaliador.';
    end if;
    if operacao = 'INSERT' then
        if data_inicio_param is null or data_fim_param is null or data_inicio_param > data_fim_param
           or id_avaliador_param is null or prazo_param is null then
            signal sqlstate '45000' set message_text = 'Informe avaliador, prazo e período válido.';
        end if;
        if not exists (select 1 from tbl_competencia_funcionario where id_funcionario = id_funcionario_param) then
            signal sqlstate '45000' set message_text = 'Vincule ao menos uma competência antes da avaliação.';
        end if;
        start transaction;
        insert into tbl_avaliacao (data_avaliacao, nota, observacao, id_funcionario,
            data_inicio_periodo, data_fim_periodo, prazo, id_avaliador, status)
        values (null, null, observacao_param, id_funcionario_param,
            data_inicio_param, data_fim_param, prazo_param, id_avaliador_param, 'Pendente');
        set id_novo = last_insert_id();
        insert into tbl_avaliacao_competencia (id_avaliacao, id_competencia, nota, observacao)
        select id_novo, id_competencia, null, null
        from tbl_competencia_funcionario where id_funcionario = id_funcionario_param;
        insert into tbl_auditoria (id_usuario, entidade, id_registro, operacao, dados_novos)
        values (id_avaliador_param, 'tbl_avaliacao', id_novo, 'INSERT',
            json_object('id_funcionario', id_funcionario_param, 'prazo', prazo_param));
        commit;
        select id_novo as id;
    elseif operacao = 'CONCLUIR' then
        if not exists
            (select 1 from tbl_avaliacao a
             inner join vw_escopo_funcionario e on e.id_funcionario=a.id_funcionario
             where a.id=id_avaliacao_param and e.id_usuario=id_avaliador_param) then
            signal sqlstate '45000' set message_text='Avaliação fora do escopo deste usuário.';
        end if;
        start transaction;
        set status_atual = null;
        select status into status_atual from tbl_avaliacao where id = id_avaliacao_param for update;
        if status_atual is null or status_atual <> 'Pendente' then
            signal sqlstate '45000' set message_text = 'Avaliação inexistente ou já concluída.';
        end if;
        select count(*), sum(case when nota is null then 1 else 0 end), round(avg(nota),1)
        into qtd_total, qtd_pendentes, media_final
        from tbl_avaliacao_competencia where id_avaliacao = id_avaliacao_param;
        if qtd_total = 0 or qtd_pendentes > 0 then
            signal sqlstate '45000' set message_text = 'Avalie todas as competências antes de concluir.';
        end if;
        update tbl_avaliacao
        set data_avaliacao = now(), data_conclusao = now(), status = 'Concluida',
            nota = media_final, observacao = coalesce(observacao_param, observacao)
        where id = id_avaliacao_param;
        insert into tbl_auditoria (id_usuario, entidade, id_registro, operacao, dados_novos)
        values (id_avaliador_param, 'tbl_avaliacao', id_avaliacao_param, 'CONCLUIR',
            json_object('nota', media_final));
        commit;
        select 1 as affectedRows, media_final as nota;
    elseif operacao = 'SELECT_BY_ID' then
        select * from vw_avaliacao_tela where id = id_avaliacao_param;
    elseif operacao = 'SELECT_COMPETENCIAS' then
        select * from vw_avaliacao_competencia_tela where id_avaliacao = id_avaliacao_param order by id;
    else
        signal sqlstate '45000' set message_text = 'Operação inválida na procAvaliacaoFluxo.';
    end if;
END $$
DELIMITER ;


-- ====== SALVAR NOTA EM AVALIAÇÃO PENDENTE ======
DELIMITER $$
drop procedure if exists procRegistrarNotaCompetencia $$
create procedure procRegistrarNotaCompetencia(
    IN id_avaliacao_param int,
    IN id_competencia_param int,
    IN nota_param decimal(3,1),
    IN observacao_param text,
    IN id_usuario_param int
)
BEGIN
    declare status_atual varchar(25);
    declare exit handler for sqlexception
    begin
        rollback;
        resignal;
    end;
    if nota_param is not null and (nota_param < 0 or nota_param > 10) then
        signal sqlstate '45000' set message_text = 'Nota deve estar na escala de 0 a 10.';
    end if;
    if not exists
        (select 1 from tbl_avaliacao a
         inner join vw_escopo_funcionario e on e.id_funcionario=a.id_funcionario
         where a.id=id_avaliacao_param and e.id_usuario=id_usuario_param) then
        signal sqlstate '45000' set message_text='Avaliação fora do escopo deste usuário.';
    end if;
    start transaction;
    select status into status_atual from tbl_avaliacao where id = id_avaliacao_param for update;
    if status_atual is null or status_atual <> 'Pendente' then
        signal sqlstate '45000' set message_text = 'Avaliação não está pendente.';
    end if;
    update tbl_avaliacao_competencia
    set nota = nota_param, observacao = observacao_param, data_registro = now()
    where id_avaliacao = id_avaliacao_param and id_competencia = id_competencia_param;
    if row_count() = 0 and not exists (
        select 1 from tbl_avaliacao_competencia
        where id_avaliacao = id_avaliacao_param and id_competencia = id_competencia_param) then
        signal sqlstate '45000' set message_text = 'Competência não vinculada à avaliação.';
    end if;
    insert into tbl_auditoria (id_usuario, entidade, id_registro, operacao, dados_novos)
    values (id_usuario_param, 'tbl_avaliacao_competencia', id_avaliacao_param, 'NOTA',
        json_object('id_competencia', id_competencia_param, 'nota', nota_param));
    commit;
    select 1 as affectedRows;
END $$
DELIMITER ;


-- ====== PROGRESSO DE METAS + HISTÓRICO ======
DELIMITER $$
drop procedure if exists procAtualizarProgressoMeta $$
create procedure procAtualizarProgressoMeta(
    IN id_meta_param int,
    IN id_usuario_param int,
    IN percentual_param decimal(5,2),
    IN observacao_param text
)
BEGIN
    declare id_status_concluida int default null;
    declare id_status_andamento int default null;
    declare id_progresso int;
    declare exit handler for sqlexception
    begin
        rollback;
        resignal;
    end;
    if percentual_param is null or percentual_param < 0 or percentual_param > 100 then
        signal sqlstate '45000' set message_text = 'Progresso deve estar entre 0 e 100.';
    end if;
    select id into id_status_concluida from tbl_status_meta
    where lower(status) in ('concluida','concluída') order by id limit 1;
    select id into id_status_andamento from tbl_status_meta
    where lower(status) in ('em andamento','andamento') order by id limit 1;
    if (percentual_param = 100 and id_status_concluida is null)
       or (percentual_param < 100 and id_status_andamento is null) then
        signal sqlstate '45000' set message_text = 'Cadastre os status Concluida e Em andamento.';
    end if;
    if not exists (select 1 from tbl_administrativo where id_usuario=id_usuario_param)
       and not exists (select 1 from tbl_meta_organizacional_funcionario mf
            inner join vw_escopo_funcionario e on e.id_funcionario=mf.id_funcionario
            where mf.id_meta_organizacional=id_meta_param and e.id_usuario=id_usuario_param) then
        signal sqlstate '45000' set message_text='Meta fora do escopo deste usuário.';
    end if;
    start transaction;
    update tbl_meta_organizacional
    set id_status_meta = case when percentual_param = 100 then id_status_concluida else id_status_andamento end
    where id = id_meta_param;
    if not exists (select 1 from tbl_meta_organizacional where id = id_meta_param) then
        signal sqlstate '45000' set message_text = 'Meta não encontrada.';
    end if;
    insert into tbl_meta_progresso (id_meta_organizacional, id_usuario_responsavel, percentual, observacao)
    values (id_meta_param, id_usuario_param, percentual_param, observacao_param);
    set id_progresso = last_insert_id();
    insert into tbl_auditoria (id_usuario, entidade, id_registro, operacao, dados_novos)
    values (id_usuario_param, 'tbl_meta_organizacional', id_meta_param, 'PROGRESSO',
      json_object('percentual', percentual_param, 'id_progresso', id_progresso));
    commit;
    select id_progresso as id;
END $$
DELIMITER ;


-- ====== REGISTRAR HISTÓRICO DOS INDICADORES ======
DELIMITER $$
drop procedure if exists procRegistrarSnapshotIndicadores $$
create procedure procRegistrarSnapshotIndicadores(
    IN semana_param date,
    IN id_usuario_param int
)
begin
    -- Legado: mantido para preservar assinatura. Não calcula indicadores em SQL.
    signal sqlstate '45000'
        set message_text='Use procSalvarIndicadorBackend: backend deve calcular antes de gravar.';
end $$
DELIMITER ;


-- ====== DASHBOARD GERAL - SLIDE 2 ======
DELIMITER $$
drop procedure if exists procDashboardColabore $$
create procedure procDashboardColabore(
    IN operacao varchar(30),
    IN id_usuario_param int
)
begin
    if operacao = 'CARDS' or operacao = 'DISTRIBUICAO_DESEMPENHO' or operacao = 'DESTAQUES' then
        select c.id_funcionario, c.nome, c.id_cargo, c.status_funcionario,
               a.id_avaliacao, a.nota, a.status as status_avaliacao, a.data_conclusao
        from vw_backend_colaboradores_brutos c
        inner join vw_escopo_funcionario e on e.id_funcionario=c.id_funcionario and e.id_usuario=id_usuario_param
        left join vw_backend_avaliacoes_brutas a on a.id_funcionario=c.id_funcionario
        group by c.id_funcionario,c.nome,c.id_cargo,c.status_funcionario,
                 a.id_avaliacao,a.nota,a.status,a.data_conclusao
        order by c.id_funcionario,a.data_conclusao;
    elseif operacao = 'SOBRECARGA_SETOR' then
        select c.id_funcionario,c.id_departamento,c.departamento, j.horas_semanais,
               at.id as id_atividade, at.semana_referencia, at.quantidade_tarefas,at.horas_previstas
        from vw_backend_colaboradores_brutos c
        inner join vw_escopo_funcionario e on e.id_funcionario=c.id_funcionario and e.id_usuario=id_usuario_param
        left join tbl_jornada_funcionario j on j.id_funcionario=c.id_funcionario
        left join tbl_atividade_trabalho at on at.id_funcionario=c.id_funcionario
        order by c.id_departamento,c.id_funcionario,at.semana_referencia;
    elseif operacao = 'ALERTAS' then
        select c.id_funcionario,c.nome,c.id_departamento,c.departamento,
               a.id_avaliacao,a.nota,a.status as status_avaliacao,a.prazo,
               at.id as id_atividade,at.semana_referencia,at.horas_previstas,
               j.horas_semanais
        from vw_backend_colaboradores_brutos c
        inner join vw_escopo_funcionario e on e.id_funcionario=c.id_funcionario and e.id_usuario=id_usuario_param
        left join vw_backend_avaliacoes_brutas a on a.id_funcionario=c.id_funcionario
        left join tbl_atividade_trabalho at on at.id_funcionario=c.id_funcionario
        left join tbl_jornada_funcionario j on j.id_funcionario=c.id_funcionario
        order by c.id_funcionario;
    else
        signal sqlstate '45000' set message_text='Operação inválida na procDashboardColabore.';
    end if;
end $$
DELIMITER ;


-- ====== SOBRECARGA / BAIXO DESEMPENHO / PENDÊNCIAS - SLIDES 3 A 5 ======
DELIMITER $$
drop procedure if exists procTelaAlertas $$
create procedure procTelaAlertas(
    IN operacao varchar(30), IN id_usuario_param int, IN busca_param varchar(100),
    IN id_departamento_param int, IN id_cargo_param int, IN pagina_param int, IN limite_param int
)
begin
    declare deslocamento int default 0;
    declare tamanho_pagina int default 20;
    set tamanho_pagina=least(greatest(coalesce(limite_param,20),1),100);
    set deslocamento=(greatest(coalesce(pagina_param,1),1)-1)*tamanho_pagina;
    if operacao='SOBRECARGA' then
        select c.id_funcionario,c.nome,c.id_cargo,c.id_departamento,j.horas_semanais,
            at.id as id_atividade,at.semana_referencia,at.horas_previstas,at.quantidade_tarefas
        from vw_backend_colaboradores_brutos c
        inner join vw_escopo_funcionario e on e.id_funcionario=c.id_funcionario and e.id_usuario=id_usuario_param
        left join tbl_jornada_funcionario j on j.id_funcionario=c.id_funcionario
        left join tbl_atividade_trabalho at on at.id_funcionario=c.id_funcionario
        where (busca_param is null or c.nome like concat('%',busca_param,'%'))
          and (id_departamento_param is null or c.id_departamento=id_departamento_param)
          and (id_cargo_param is null or c.id_cargo=id_cargo_param)
        order by c.id_funcionario,at.semana_referencia desc limit tamanho_pagina offset deslocamento;
    elseif operacao='BAIXO_DESEMPENHO' then
        select c.id_funcionario,c.nome,c.id_cargo,c.id_departamento,
            a.id_avaliacao,a.nota,a.status as status_avaliacao,a.data_conclusao
        from vw_backend_colaboradores_brutos c
        inner join vw_escopo_funcionario e on e.id_funcionario=c.id_funcionario and e.id_usuario=id_usuario_param
        left join vw_backend_avaliacoes_brutas a on a.id_funcionario=c.id_funcionario
        where (busca_param is null or c.nome like concat('%',busca_param,'%'))
          and (id_departamento_param is null or c.id_departamento=id_departamento_param)
          and (id_cargo_param is null or c.id_cargo=id_cargo_param)
        order by c.id_funcionario,a.data_conclusao desc limit tamanho_pagina offset deslocamento;
    elseif operacao='AVALIACOES_PENDENTES' then
        select a.*,f.nome as nome_funcionario,f.id_cargo
        from vw_backend_avaliacoes_pendentes_bruta a
        inner join tbl_funcionario f on f.id=a.id_funcionario
        inner join vw_escopo_funcionario e on e.id_funcionario=f.id and e.id_usuario=id_usuario_param
        where (busca_param is null or f.nome like concat('%',busca_param,'%'))
          and (id_cargo_param is null or f.id_cargo=id_cargo_param)
          and (id_departamento_param is null or exists
              (select 1 from tbl_funcionario_departamento fd
               where fd.id_funcionario=f.id and fd.id_departamento=id_departamento_param))
        order by a.prazo,a.id_avaliacao limit tamanho_pagina offset deslocamento;
    else
        signal sqlstate '45000' set message_text='Operação inválida na procTelaAlertas.';
    end if;
end $$
DELIMITER ;


-- ====== PERFIL / SEGURANÇA - SLIDES 6 A 9 ======
DELIMITER $$
drop procedure if exists procPerfilUsuarioTela $$
create procedure procPerfilUsuarioTela(
    IN operacao varchar(30),
    IN id_usuario_param int
)
BEGIN
    if operacao = 'DADOS' then
        select * from vw_perfil_usuario where id_usuario=id_usuario_param;
    elseif operacao = 'EMAILS' then
        select * from vw_usuario_email where id_usuario=id_usuario_param order by id;
    elseif operacao = 'TELEFONES' then
        select * from vw_usuario_telefone where id_usuario=id_usuario_param order by id;
    else
        signal sqlstate '45000' set message_text='Operação inválida na procPerfilUsuarioTela.';
    end if;
END $$
DELIMITER ;


-- ====== LISTA FILTRÁVEL / CARDS COLABORADORES - SLIDES 10 A 15 ======
DELIMITER $$
drop procedure if exists procTelaColaboradores $$
create procedure procTelaColaboradores(
    IN operacao varchar(30),
    IN id_usuario_param int,
    IN busca_param varchar(100),
    IN id_departamento_param int,
    IN id_cargo_param int,
    IN id_status_param int,
    IN data_inicio_param date,
    IN data_fim_param date,
    IN pagina_param int,
    IN limite_param int
)
BEGIN
    declare deslocamento int default 0;
    declare tamanho_pagina int default 20;
    set tamanho_pagina=least(greatest(coalesce(limite_param,20),1),100);
    set deslocamento=(greatest(coalesce(pagina_param,1),1)-1)*tamanho_pagina;
    if operacao = 'LISTA' then
        select lf.* from vw_lista_colaboradores lf
        inner join vw_escopo_funcionario e on e.id_funcionario=lf.id and e.id_usuario=id_usuario_param
        where (busca_param is null or lf.nome like concat('%',busca_param,'%')
               or cast(lf.numero_matricula as char) like concat('%',busca_param,'%')
               or exists (select 1 from tbl_funcionario_email fe inner join tbl_email em on em.id=fe.id_email
                          where fe.id_funcionario=lf.id and em.email like concat('%',busca_param,'%')))
          and (id_departamento_param is null or exists
               (select 1 from tbl_funcionario_departamento fd where fd.id_funcionario=lf.id and fd.id_departamento=id_departamento_param))
          and (id_cargo_param is null or lf.id_cargo=id_cargo_param)
          and (id_status_param is null or lf.id_status_funcionario=id_status_param)
          and (data_inicio_param is null or lf.data_contratacao>=data_inicio_param)
          and (data_fim_param is null or lf.data_contratacao<=data_fim_param)
        order by lf.id desc limit tamanho_pagina offset deslocamento;
    elseif operacao = 'CARDS' then
        -- Retorna registros individuais; contagem de ativos/admitidos/desligados no backend.
        select distinct f.id as id_funcionario, f.data_contratacao, f.data_desligamento,
            f.id_status_funcionario, sf.status as status_funcionario
        from tbl_funcionario f
        inner join tbl_status_funcionario sf on sf.id=f.id_status_funcionario
        inner join vw_escopo_funcionario e on e.id_funcionario=f.id and e.id_usuario=id_usuario_param;
    elseif operacao = 'SETORES' then
        select distinct d.id, d.nome
        from tbl_departamento d
        inner join tbl_funcionario_departamento fd on fd.id_departamento=d.id
        inner join vw_escopo_funcionario e on e.id_funcionario=fd.id_funcionario and e.id_usuario=id_usuario_param
        order by d.nome;
    elseif operacao = 'FILTROS' then
        select d.id, d.nome from tbl_departamento d order by nome;
    else
        signal sqlstate '45000' set message_text='Operação inválida na procTelaColaboradores.';
    end if;
END $$
DELIMITER ;


-- ====== PERFIL INDIVIDUAL / GRAFICOS / COMPETÊNCIAS - SLIDES 11 E 17 ======
DELIMITER $$
drop procedure if exists procTelaColaboradorDetalhe $$
create procedure procTelaColaboradorDetalhe(
    IN operacao varchar(30),
    IN id_usuario_param int,
    IN id_funcionario_param int
)
BEGIN
    if not exists (select 1 from vw_escopo_funcionario where id_usuario=id_usuario_param and id_funcionario=id_funcionario_param) then
        signal sqlstate '45000' set message_text='Funcionário não pertence ao escopo deste usuário.';
    end if;
    if operacao = 'RESUMO' then
        select * from vw_backend_colaboradores_brutos where id_funcionario=id_funcionario_param;
    elseif operacao = 'COMPETENCIAS' then
        select * from vw_competencia_colaborador_atual where id_funcionario=id_funcionario_param order by competencia;
    elseif operacao = 'DISTRIBUICAO_COMPETENCIAS' then
        select * from vw_backend_competencias_vinculadas_brutas where id_funcionario=id_funcionario_param;
    elseif operacao = 'EVOLUCAO' then
        select * from vw_backend_evolucao_avaliacoes_bruta where id_funcionario=id_funcionario_param order by data_conclusao;
    elseif operacao = 'METAS' then
        select m.* from vw_metas_tela m
        inner join tbl_meta_organizacional_funcionario mf on mf.id_meta_organizacional=m.id
        where mf.id_funcionario=id_funcionario_param order by m.prazo;
    elseif operacao = 'AVALIACOES' then
        select * from vw_avaliacao_tela where id_funcionario=id_funcionario_param order by id desc;
    else
        signal sqlstate '45000' set message_text='Operação inválida na procTelaColaboradorDetalhe.';
    end if;
END $$
DELIMITER ;


-- ====== LISTA / CARDS / HISTÓRICO DE METAS - SLIDE 18 ======
DELIMITER $$
drop procedure if exists procTelaMetas $$
create procedure procTelaMetas(
    IN operacao varchar(30),
    IN id_usuario_param int,
    IN busca_param varchar(150),
    IN id_departamento_param int,
    IN id_funcionario_param int,
    IN id_status_param int,
    IN prazo_inicio_param date,
    IN prazo_fim_param date,
    IN pagina_param int,
    IN limite_param int
)
BEGIN
    declare deslocamento int default 0;
    declare tamanho_pagina int default 20;
    set tamanho_pagina=least(greatest(coalesce(limite_param,20),1),100);
    set deslocamento=(greatest(coalesce(pagina_param,1),1)-1)*tamanho_pagina;
    if operacao = 'LISTA' or operacao = 'CARDS' then
        if operacao = 'LISTA' then
            select m.* from vw_metas_tela m
            where (busca_param is null or m.titulo like concat('%',busca_param,'%'))
              and (id_status_param is null or m.id_status_meta=id_status_param)
              and (prazo_inicio_param is null or m.prazo>=prazo_inicio_param)
              and (prazo_fim_param is null or m.prazo<=prazo_fim_param)
              and (id_departamento_param is null or exists
                  (select 1 from tbl_meta_departamento md where md.id_meta_organizacional=m.id and md.id_departamento=id_departamento_param))
              and (id_funcionario_param is null or exists
                  (select 1 from tbl_meta_organizacional_funcionario mf where mf.id_meta_organizacional=m.id and mf.id_funcionario=id_funcionario_param))
              and (exists
                  (select 1 from tbl_meta_organizacional_funcionario mf
                   inner join vw_escopo_funcionario e on e.id_funcionario=mf.id_funcionario and e.id_usuario=id_usuario_param
                   where mf.id_meta_organizacional=m.id)
                   or (exists (select 1 from tbl_administrativo adm where adm.id_usuario=id_usuario_param)
                       and exists (select 1 from tbl_meta_departamento md where md.id_meta_organizacional=m.id)))
            order by m.prazo, m.id desc limit tamanho_pagina offset deslocamento;
        else
            select count(*) as total_metas,
            sum(case when lower(m.status_meta) in ('em andamento','andamento') then 1 else 0 end) as em_andamento,
            sum(case when lower(m.status_meta) in ('concluida','concluída') then 1 else 0 end) as concluidas,
            sum(case when m.prazo<curdate() and lower(m.status_meta) not in ('concluida','concluída') then 1 else 0 end) as atrasadas
            from vw_metas_tela m
            where exists (select 1 from tbl_meta_organizacional_funcionario mf
                          inner join vw_escopo_funcionario e on e.id_funcionario=mf.id_funcionario and e.id_usuario=id_usuario_param
                          where mf.id_meta_organizacional=m.id)
              or (exists (select 1 from tbl_administrativo adm where adm.id_usuario=id_usuario_param)
                  and exists (select 1 from tbl_meta_departamento md where md.id_meta_organizacional=m.id));
        end if;
    elseif operacao = 'HISTORICO' then
        select h.* from vw_meta_progresso_historico h
        where exists (select 1 from tbl_meta_organizacional_funcionario mf
                      inner join vw_escopo_funcionario e on e.id_funcionario=mf.id_funcionario and e.id_usuario=id_usuario_param
                      where mf.id_meta_organizacional=h.id_meta_organizacional)
           or exists (select 1 from tbl_administrativo where id_usuario=id_usuario_param)
        order by h.id desc;
    else
        signal sqlstate '45000' set message_text='Operação inválida na procTelaMetas.';
    end if;
END $$
DELIMITER ;


-- ====== RELATÓRIOS FILTRÁVEIS - SLIDES 19 A 24 ======
DELIMITER $$
drop procedure if exists procRelatoriosColabore $$
create procedure procRelatoriosColabore(
    IN operacao varchar(30),
    IN id_usuario_param int,
    IN data_inicio_param date,
    IN data_fim_param date,
    IN id_departamento_param int,
    IN id_funcionario_param int
)
BEGIN
    if operacao = 'COLABORADORES' then
        select ic.id,ic.nome,ic.nome_cargo,ic.departamentos,ic.status_funcionario,
           ic.data_contratacao,ic.data_desligamento,ic.desempenho_medio,
           ic.indice_sobrecarga,ic.situacao_sobrecarga
        from vw_indicadores_colaboradores ic
        inner join vw_escopo_funcionario e on e.id_funcionario=ic.id and e.id_usuario=id_usuario_param
        where (id_funcionario_param is null or ic.id=id_funcionario_param)
          and (id_departamento_param is null or exists (select 1 from tbl_funcionario_departamento fd
              where fd.id_funcionario=ic.id and fd.id_departamento=id_departamento_param))
          and (data_inicio_param is null or ic.data_contratacao>=data_inicio_param)
          and (data_fim_param is null or ic.data_contratacao<=data_fim_param)
        order by ic.id;
    elseif operacao = 'DESEMPENHO' then
        select a.id,a.id_funcionario,a.nome_funcionario,a.nome_avaliador,a.nota,
            a.data_conclusao,a.data_inicio_periodo,a.data_fim_periodo
        from vw_avaliacao_tela a
        inner join vw_escopo_funcionario e on e.id_funcionario=a.id_funcionario and e.id_usuario=id_usuario_param
        where a.status='Concluida'
          and (id_funcionario_param is null or a.id_funcionario=id_funcionario_param)
          and (data_inicio_param is null or date(a.data_conclusao)>=data_inicio_param)
          and (data_fim_param is null or date(a.data_conclusao)<=data_fim_param)
          and (id_departamento_param is null or exists (select 1 from tbl_funcionario_departamento fd
              where fd.id_funcionario=a.id_funcionario and fd.id_departamento=id_departamento_param))
        order by a.data_conclusao desc;
    elseif operacao = 'SOBRECARGA' then
        select s.* from vw_sobrecarga_detalhada s
        inner join vw_escopo_funcionario e on e.id_funcionario=s.id_funcionario and e.id_usuario=id_usuario_param
        where (id_funcionario_param is null or s.id_funcionario=id_funcionario_param)
          and (data_inicio_param is null or s.semana_referencia>=data_inicio_param)
          and (data_fim_param is null or s.semana_referencia<=data_fim_param)
          and (id_departamento_param is null or exists (select 1 from tbl_funcionario_departamento fd
              where fd.id_funcionario=s.id_funcionario and fd.id_departamento=id_departamento_param))
        order by s.indice_sobrecarga desc;
    elseif operacao = 'METAS' then
        select m.* from vw_metas_tela m
        where (data_inicio_param is null or m.prazo>=data_inicio_param)
          and (data_fim_param is null or m.prazo<=data_fim_param)
          and (id_funcionario_param is null or exists (select 1 from tbl_meta_organizacional_funcionario mf
               where mf.id_meta_organizacional=m.id and mf.id_funcionario=id_funcionario_param))
          and (id_departamento_param is null or exists (select 1 from tbl_meta_departamento md
               where md.id_meta_organizacional=m.id and md.id_departamento=id_departamento_param))
          and (exists (select 1 from tbl_meta_organizacional_funcionario mf
                inner join vw_escopo_funcionario e on e.id_funcionario=mf.id_funcionario and e.id_usuario=id_usuario_param
                where mf.id_meta_organizacional=m.id)
              or exists (select 1 from tbl_administrativo a where a.id_usuario=id_usuario_param))
        order by m.prazo;
    elseif operacao = 'PERFIL_EQUIPE' then
        select p.sexo, p.faixa_etaria, count(*) as total
        from vw_perfil_equipe p
        inner join vw_escopo_funcionario e on e.id_funcionario=p.id_funcionario and e.id_usuario=id_usuario_param
        where (id_funcionario_param is null or p.id_funcionario=id_funcionario_param)
          and (id_departamento_param is null or exists (select 1 from tbl_funcionario_departamento fd
             where fd.id_funcionario=p.id_funcionario and fd.id_departamento=id_departamento_param))
        group by p.sexo,p.faixa_etaria;
    elseif operacao = 'RESUMO_COLABORADORES' then
        select count(*) as total_colaboradores,
          sum(case when f.data_contratacao between coalesce(data_inicio_param,'1900-01-01') and coalesce(data_fim_param,curdate()) then 1 else 0 end) as admitidos_periodo,
          sum(case when f.data_desligamento between coalesce(data_inicio_param,'1900-01-01') and coalesce(data_fim_param,curdate()) then 1 else 0 end) as desligados_periodo
        from tbl_funcionario f
        inner join vw_escopo_funcionario e on e.id_funcionario=f.id and e.id_usuario=id_usuario_param
        where (id_funcionario_param is null or f.id=id_funcionario_param)
          and (id_departamento_param is null or exists (select 1 from tbl_funcionario_departamento fd
              where fd.id_funcionario=f.id and fd.id_departamento=id_departamento_param));
    else
        signal sqlstate '45000' set message_text='Operação inválida na procRelatoriosColabore.';
    end if;
END $$
DELIMITER ;


-- ====== INTERFACE DE DADOS BRUTOS PARA O BACKEND (TELAS E RELATÓRIOS) ======
-- Campos passados em id_usuario_param devem vir do JWT autenticado e autorizado na API.
-- As views legadas de indicadores são auxiliares; NÃO utilizar como fonte dos cálculos.
DELIMITER $$
drop procedure if exists procDadosIndicadoresBackend $$
create procedure procDadosIndicadoresBackend(
    IN operacao varchar(30),
    IN id_usuario_param int,
    IN id_funcionario_param int,
    IN id_departamento_param int,
    IN data_inicio_param date,
    IN data_fim_param date
)
BEGIN
    if id_usuario_param is null or not exists
        (select 1 from tbl_administrativo where id_usuario=id_usuario_param
         union all select 1 from tbl_gestor where id_usuario=id_usuario_param) then
        signal sqlstate '45000' set message_text='Usuário sem perfil autorizado.';
    end if;

    if operacao = 'COLABORADORES' then
        select c.* from vw_backend_colaboradores_brutos c
        inner join vw_escopo_funcionario e on e.id_funcionario=c.id_funcionario and e.id_usuario=id_usuario_param
        where (id_funcionario_param is null or c.id_funcionario=id_funcionario_param)
          and (id_departamento_param is null or c.id_departamento=id_departamento_param)
        order by c.id_funcionario, c.id_departamento;

    elseif operacao = 'AVALIACOES' then
        select a.* from vw_backend_avaliacoes_brutas a
        inner join vw_escopo_funcionario e on e.id_funcionario=a.id_funcionario and e.id_usuario=id_usuario_param
        where (id_funcionario_param is null or a.id_funcionario=id_funcionario_param)
          and (data_inicio_param is null or coalesce(a.data_conclusao, a.data_avaliacao, a.prazo)>=data_inicio_param)
          and (data_fim_param is null or coalesce(a.data_conclusao, a.data_avaliacao, a.prazo)<date_add(data_fim_param,interval 1 day))
          and (id_departamento_param is null or exists
             (select 1 from tbl_funcionario_departamento fd where fd.id_funcionario=a.id_funcionario and fd.id_departamento=id_departamento_param))
        order by a.id_funcionario,a.id_avaliacao;

    elseif operacao = 'NOTAS_COMPETENCIAS' then
        select n.* from vw_backend_notas_competencias_brutas n
        inner join vw_escopo_funcionario e on e.id_funcionario=n.id_funcionario and e.id_usuario=id_usuario_param
        where (id_funcionario_param is null or n.id_funcionario=id_funcionario_param)
          and (id_departamento_param is null or exists
             (select 1 from tbl_funcionario_departamento fd where fd.id_funcionario=n.id_funcionario and fd.id_departamento=id_departamento_param))
        order by n.id_funcionario,n.id_avaliacao,n.id_competencia;

    elseif operacao = 'ATIVIDADES' then
        select a.* from vw_backend_carga_bruta a
        inner join vw_escopo_funcionario e on e.id_funcionario=a.id_funcionario and e.id_usuario=id_usuario_param
        where (id_funcionario_param is null or a.id_funcionario=id_funcionario_param)
          and (data_inicio_param is null or a.semana_referencia>=data_inicio_param or a.semana_referencia is null)
          and (data_fim_param is null or a.semana_referencia<=data_fim_param or a.semana_referencia is null)
          and (id_departamento_param is null or exists
             (select 1 from tbl_funcionario_departamento fd where fd.id_funcionario=a.id_funcionario and fd.id_departamento=id_departamento_param))
        order by a.id_funcionario,a.semana_referencia;

    elseif operacao = 'HORAS' then
        select h.* from vw_backend_apontamentos_brutos h
        inner join vw_escopo_funcionario e on e.id_funcionario=h.id_funcionario and e.id_usuario=id_usuario_param
        where (id_funcionario_param is null or h.id_funcionario=id_funcionario_param)
          and (data_inicio_param is null or h.semana_referencia>=data_inicio_param)
          and (data_fim_param is null or h.semana_referencia<=data_fim_param)
          and (id_departamento_param is null or exists
             (select 1 from tbl_funcionario_departamento fd where fd.id_funcionario=h.id_funcionario and fd.id_departamento=id_departamento_param))
        order by h.id_funcionario,h.semana_referencia;

    elseif operacao = 'METAS' then
        select distinct m.* from vw_backend_metas_brutas m
        where (id_funcionario_param is null or m.id_funcionario=id_funcionario_param)
          and (id_departamento_param is null or m.id_departamento=id_departamento_param)
          and (data_inicio_param is null or m.prazo>=data_inicio_param)
          and (data_fim_param is null or m.prazo<=data_fim_param)
          and (exists (select 1 from tbl_meta_organizacional_funcionario mf
                       inner join vw_escopo_funcionario e on e.id_funcionario=mf.id_funcionario and e.id_usuario=id_usuario_param
                       where mf.id_meta_organizacional=m.id_meta)
               or exists (select 1 from tbl_administrativo adm where adm.id_usuario=id_usuario_param))
        order by m.id_meta;

    elseif operacao = 'PROGRESSO_METAS' then
        select p.* from vw_backend_progresso_metas_bruto p
        where exists (select 1 from tbl_meta_organizacional_funcionario mf
                      inner join vw_escopo_funcionario e on e.id_funcionario=mf.id_funcionario and e.id_usuario=id_usuario_param
                      where mf.id_meta_organizacional=p.id_meta_organizacional)
           or exists (select 1 from tbl_administrativo where id_usuario=id_usuario_param)
        order by p.id_meta_organizacional,p.data_registro;

    elseif operacao = 'JORNADA' then
        select j.* from vw_backend_jornada_bruta j
        inner join vw_escopo_funcionario e on e.id_funcionario=j.id_funcionario and e.id_usuario=id_usuario_param
        where (id_funcionario_param is null or j.id_funcionario=id_funcionario_param);
    elseif operacao = 'COMPETENCIAS_VINCULADAS' then
        select c.* from vw_backend_competencias_vinculadas_brutas c
        inner join vw_escopo_funcionario e on e.id_funcionario=c.id_funcionario and e.id_usuario=id_usuario_param
        where (id_funcionario_param is null or c.id_funcionario=id_funcionario_param);
    elseif operacao = 'PARAMETROS' then
        select * from vw_backend_parametros_indicadores;

    else
        signal sqlstate '45000' set message_text='Operação inválida na procDadosIndicadoresBackend.';
    end if;
END $$
DELIMITER ;

-- ====== GRAVAR INDICADORES CALCULADOS PELO BACKEND ======
DELIMITER $$
drop procedure if exists procSalvarIndicadorBackend $$
create procedure procSalvarIndicadorBackend(
    IN id_usuario_param int,
    IN id_funcionario_param int,
    IN semana_param date,
    IN indice_sobrecarga_param decimal(7,2),
    IN desempenho_medio_param decimal(4,2)
)
begin
    if not exists (select 1 from vw_escopo_funcionario
        where id_usuario=id_usuario_param and id_funcionario=id_funcionario_param) then
        signal sqlstate '45000' set message_text='Funcionário fora do escopo do usuário.';
    end if;
    if semana_param is null or indice_sobrecarga_param < 0
       or desempenho_medio_param < 0 or desempenho_medio_param > 10 then
        signal sqlstate '45000' set message_text='Parâmetros de indicador inválidos.';
    end if;
    insert into tbl_indicador_historico
        (id_funcionario, semana_referencia, indice_sobrecarga, desempenho_medio)
    values (id_funcionario_param, semana_param, indice_sobrecarga_param, desempenho_medio_param)
    on duplicate key update id=id;
    select row_count() as affectedRows;
end $$
DELIMITER ;