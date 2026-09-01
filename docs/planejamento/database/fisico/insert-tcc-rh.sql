##################### ARQUIVO RESPONSÁVEL PELOS INSERTs #####################

### UTILIZE PRIMEIRO O SCRIPT DE CREATE ###
use db_tcc_rh;

-- ====== tabela de tipo telefone ======

insert into tbl_tipo_telefone (tipo) values
('celular'),
('residencial'),
('comercial');


-- ====== tabela de sexo ======

insert into tbl_sexo (sigla, sexo) values
('m', 'masculino'),
('f', 'feminino'),
('nb', 'não binário');


-- ====== tabela de departamento ======

insert into tbl_departamento (nome) values
('recursos humanos'),
('tecnologia da informação'),
('financeiro'),
('marketing'),
('comercial'),
('operações'),
('logística'),
('administrativo');


-- ====== tabela de cargo ======

insert into tbl_cargo (nome) values
('analista de recursos humanos'),
('desenvolvedor de sistemas'),
('analista financeiro'),
('analista de marketing'),
('analista comercial'),
('assistente administrativo'),
('analista de operações'),
('analista de logística'),
('coordenador de departamento'),
('especialista de processos');


-- ====== tabela de função ======

insert into tbl_funcao (nome) values
('recrutamento e seleção'),
('desenvolvimento de pessoas'),
('desenvolvimento de sistemas'),
('análise financeira'),
('planejamento de marketing'),
('gestão comercial'),
('gestão operacional'),
('controle logístico'),
('gestão administrativa'),
('gestão de processos');


-- ====== tabela de competência ======

insert into tbl_competencia (descricao) values
('comunicação'),
('trabalho em equipe'),
('liderança'),
('organização'),
('planejamento'),
('resolução de problemas'),
('pensamento analítico'),
('adaptabilidade'),
('gestão do tempo'),
('inteligência emocional'),
('tomada de decisão'),
('criatividade'),
('conhecimento técnico'),
('foco em resultados'),
('gestão de conflitos');


-- ====== tabela de meta organizacional ======

insert into tbl_meta_organizacional (titulo, descricao) values
('aumentar produtividade', 'aumentar a produtividade dos setores em 10 por cento durante o próximo ciclo de avaliação.'),
('reduzir absenteísmo', 'reduzir os índices de ausência dos colaboradores por meio de ações preventivas e acompanhamento gerencial.'),
('melhorar desempenho', 'elevar o desempenho médio dos colaboradores por meio de capacitação e acompanhamento contínuo.'),
('reduzir erros operacionais', 'reduzir a ocorrência de erros nos processos internos e aumentar a qualidade das entregas.'),
('aumentar satisfação interna', 'melhorar a satisfação dos colaboradores em relação ao ambiente e aos processos de trabalho.'),
('otimizar processos', 'identificar oportunidades de melhoria e reduzir gargalos nos processos organizacionais.');


-- ====== tabela de email ======

insert into tbl_email (email) values
('rh@empresaexemplo.com'),
('ti@empresaexemplo.com'),
('financeiro@empresaexemplo.com'),
('marketing@empresaexemplo.com'),
('comercial@empresaexemplo.com'),
('operacoes@empresaexemplo.com'),
('logistica@empresaexemplo.com'),
('administrativo@empresaexemplo.com'),

('ana.silva@empresaexemplo.com'),
('bruno.santos@empresaexemplo.com'),
('carla.oliveira@empresaexemplo.com'),
('daniel.costa@empresaexemplo.com'),
('eduarda.almeida@empresaexemplo.com'),
('felipe.rocha@empresaexemplo.com'),
('gabriela.martins@empresaexemplo.com'),
('henrique.lima@empresaexemplo.com'),
('isabela.mendes@empresaexemplo.com'),
('joao.pereira@empresaexemplo.com'),
('karina.ferreira@empresaexemplo.com'),
('lucas.carvalho@empresaexemplo.com'),
('mariana.gomes@empresaexemplo.com'),
('nicolas.ribeiro@empresaexemplo.com'),
('olivia.barros@empresaexemplo.com'),
('paulo.teixeira@empresaexemplo.com'),
('rafaela.nunes@empresaexemplo.com'),
('ricardo.moura@empresaexemplo.com'),
('sabrina.cardoso@empresaexemplo.com'),
('thiago.araujo@empresaexemplo.com'),
('vanessa.freitas@empresaexemplo.com'),
('victor.barbosa@empresaexemplo.com'),
('yasmim.machado@empresaexemplo.com'),

('gestao.rh@empresaexemplo.com'),
('gestao.ti@empresaexemplo.com'),
('gestao.financeiro@empresaexemplo.com'),
('gestao.comercial@empresaexemplo.com'),
('gestao.operacoes@empresaexemplo.com'),
('gestao.administrativo@empresaexemplo.com'),

('admin1@empresaexemplo.com'),
('admin2@empresaexemplo.com');


-- ====== tabela de telefone ======

insert into tbl_telefone (numero, id_tipo_telefone) values
('11987650001', 1),
('11987650002', 1),
('11987650003', 1),
('11987650004', 1),
('11987650005', 1),
('11987650006', 1),
('11987650007', 1),
('11987650008', 1),
('11987650009', 1),
('11987650010', 1),
('11987650011', 1),
('11987650012', 1),
('11987650013', 1),
('11987650014', 1),
('11987650015', 1),
('11987650016', 1),
('11987650017', 1),
('11987650018', 1),
('11987650019', 1),
('11987650020', 1),
('11987650021', 1),
('11987650022', 1),
('11987650023', 1),
('11987650024', 1),
('11987650025', 1),
('11987650026', 1),
('11987650027', 1),
('11987650028', 1),
('11987650029', 1),
('11987650030', 1),
('11987650031', 1),
('11987650032', 1),
('11987650033', 1),
('11987650034', 1),
('11987650035', 1),
('11987650036', 1),
('11987650037', 1),
('11987650038', 1);


-- ====== tabela de usuario ======

insert into tbl_usuario (nome, data_nascimento) values
('marcos vinicius souza', '1981-04-15'),
('patricia cristina oliveira', '1984-09-22'),
('roberto augusto lima', '1979-02-11'),
('camila fernandes costa', '1986-07-30'),
('andre luiz martins', '1982-11-18'),
('juliana aparecida rocha', '1988-05-09'),
('fernando alves', '1980-03-25'),
('luciana mendes', '1985-12-14');


-- ====== tabela de usuario login ======

insert into tbl_usuario_login (email_login, senha_hash, id_usuario) values
('gestao.rh@empresaexemplo.com', 'hash_exemplo_rh_001', 1),
('gestao.ti@empresaexemplo.com', 'hash_exemplo_ti_002', 2),
('gestao.financeiro@empresaexemplo.com', 'hash_exemplo_financeiro_003', 3),
('gestao.comercial@empresaexemplo.com', 'hash_exemplo_comercial_004', 4),
('gestao.operacoes@empresaexemplo.com', 'hash_exemplo_operacoes_005', 5),
('gestao.administrativo@empresaexemplo.com', 'hash_exemplo_administrativo_006', 6),
('admin1@empresaexemplo.com', 'hash_exemplo_admin_007', 7),
('admin2@empresaexemplo.com', 'hash_exemplo_admin_008', 8);


-- ====== tabela de gestor ======

insert into tbl_gestor (id_usuario) values
(1),
(2),
(3),
(4),
(5),
(6);


-- ====== tabela de administrativo ======

insert into tbl_administrativo (id_usuario) values
(7),
(8);


-- ====== tabela de funcionario ======

insert into tbl_funcionario
(nome, cpf, data_contratacao, data_nascimento, id_sexo, id_cargo, id_gestor) values

('ana clara silva', '111.111.111-01', '2022-03-14', '1995-06-18', 2, 1, 1),
('bruno henrique santos', '111.111.111-02', '2021-08-02', '1992-02-25', 1, 2, 2),
('carla cristina oliveira', '111.111.111-03', '2023-01-16', '1998-09-12', 2, 3, 3),
('daniel augusto costa', '111.111.111-04', '2020-05-11', '1990-12-03', 1, 4, 4),
('eduarda maria almeida', '111.111.111-05', '2022-09-19', '1996-04-22', 2, 5, 4),
('felipe rocha', '111.111.111-06', '2021-02-08', '1993-07-15', 1, 6, 6),
('gabriela martins', '111.111.111-07', '2023-06-05', '1999-01-28', 2, 7, 5),
('henrique lima', '111.111.111-08', '2019-11-04', '1989-10-10', 1, 8, 5),
('isabela mendes', '111.111.111-09', '2022-01-24', '1997-03-19', 2, 1, 1),
('joao pedro pereira', '111.111.111-10', '2020-10-13', '1991-08-07', 1, 2, 2),

('karina ferreira', '111.111.111-11', '2021-04-12', '1994-11-26', 2, 3, 3),
('lucas carvalho', '111.111.111-12', '2023-02-06', '1998-05-14', 1, 4, 4),
('mariana gomes', '111.111.111-13', '2020-07-20', '1993-09-30', 2, 5, 4),
('nicolas ribeiro', '111.111.111-14', '2022-11-07', '1996-12-18', 1, 6, 6),
('olivia barros', '111.111.111-15', '2021-06-21', '1995-02-09', 2, 7, 5),
('paulo teixeira', '111.111.111-16', '2019-03-18', '1988-06-27', 1, 8, 5),
('rafaela nunes', '111.111.111-17', '2022-08-15', '1997-10-05', 2, 1, 1),
('ricardo moura', '111.111.111-18', '2020-02-17', '1991-04-16', 1, 2, 2),
('sabrina cardoso', '111.111.111-19', '2023-04-03', '1999-07-21', 2, 3, 3),
('thiago araujo', '111.111.111-20', '2021-09-27', '1994-01-13', 1, 4, 4),

('vanessa freitas', '111.111.111-21', '2022-05-09', '1996-08-29', 2, 5, 4),
('victor barbosa', '111.111.111-22', '2020-12-01', '1990-03-11', 1, 6, 6),
('yasmim machado', '111.111.111-23', '2023-03-13', '1998-11-02', 2, 7, 5),
('adriano campos', '111.111.111-24', '2019-08-26', '1987-05-24', 1, 8, 5),
('beatriz moreira', '111.111.111-25', '2022-10-17', '1995-12-07', 2, 1, 1),
('caio nascimento', '111.111.111-26', '2021-01-25', '1993-06-30', 1, 2, 2),
('debora santos', '111.111.111-27', '2023-05-22', '1999-09-17', 2, 3, 3),
('erick monteiro', '111.111.111-28', '2020-06-15', '1992-11-08', 1, 4, 4),
('fernanda dias', '111.111.111-29', '2021-11-29', '1996-02-14', 2, 5, 4),
('gustavo vieira', '111.111.111-30', '2019-10-07', '1989-08-23', 1, 6, 6);


-- ====== tabela de avaliacao ======

insert into tbl_avaliacao
(data_avaliacao, nota, observacao, id_funcionario) values

('2026-01-15 09:00:00', 9.2, 'apresenta excelente desempenho e alto comprometimento com as atividades.', 1),
('2026-01-16 09:30:00', 8.7, 'demonstra domínio técnico e boa capacidade de resolução de problemas.', 2),
('2026-01-17 10:00:00', 7.8, 'apresenta desempenho adequado, mas possui oportunidades de desenvolvimento.', 3),
('2026-01-18 09:15:00', 9.0, 'apresenta resultados consistentes e boa capacidade de planejamento.', 4),
('2026-01-19 10:30:00', 8.5, 'bom desempenho e relacionamento positivo com a equipe.', 5),
('2026-01-20 09:00:00', 6.4, 'apresenta dificuldades relacionadas à organização e gestão do tempo.', 6),
('2026-01-21 11:00:00', 9.4, 'excelente desempenho, criatividade e foco em resultados.', 7),
('2026-01-22 09:45:00', 7.1, 'desempenho abaixo do esperado em algumas atividades operacionais.', 8),
('2026-01-23 10:00:00', 8.9, 'boa comunicação e capacidade de trabalho em equipe.', 9),
('2026-01-24 09:30:00', 9.1, 'alto domínio técnico e excelente capacidade analítica.', 10),

('2026-02-10 09:00:00', 7.5, 'desempenho satisfatório com necessidade de evolução em planejamento.', 11),
('2026-02-11 10:00:00', 8.3, 'apresenta evolução positiva e bom relacionamento interpessoal.', 12),
('2026-02-12 09:30:00', 6.8, 'necessita desenvolver competências relacionadas à tomada de decisão.', 13),
('2026-02-13 11:00:00', 8.8, 'bom desempenho e cumprimento consistente das atividades.', 14),
('2026-02-14 09:00:00', 9.3, 'excelente capacidade de liderança e organização.', 15),
('2026-02-15 10:30:00', 6.2, 'apresenta queda de desempenho e dificuldade no cumprimento de prazos.', 16),
('2026-02-16 09:15:00', 8.6, 'bom desempenho e elevada capacidade de adaptação.', 17),
('2026-02-17 10:00:00', 7.3, 'necessita melhorar comunicação e resolução de problemas.', 18),
('2026-02-18 09:45:00', 9.0, 'apresenta resultados acima da média e boa organização.', 19),
('2026-02-19 11:00:00', 8.1, 'desempenho consistente e boa capacidade de planejamento.', 20),

('2026-03-10 09:00:00', 9.5, 'excelente desempenho e forte orientação para resultados.', 21),
('2026-03-11 10:00:00', 6.7, 'apresenta sinais de dificuldade relacionados à gestão do tempo.', 22),
('2026-03-12 09:30:00', 8.4, 'bom desempenho técnico e capacidade de adaptação.', 23),
('2026-03-13 11:00:00', 7.0, 'apresenta necessidade de desenvolvimento em organização e planejamento.', 24),
('2026-03-14 09:15:00', 9.1, 'excelente comunicação e bom desempenho nas atividades.', 25),
('2026-03-15 10:00:00', 8.9, 'apresenta alto conhecimento técnico e capacidade analítica.', 26),
('2026-03-16 09:45:00', 6.5, 'desempenho abaixo do esperado e necessidade de acompanhamento.', 27),
('2026-03-17 11:00:00', 8.0, 'desempenho adequado e evolução positiva.', 28),
('2026-03-18 09:00:00', 9.3, 'excelente desempenho e alto comprometimento.', 29),
('2026-03-19 10:30:00', 7.6, 'desempenho satisfatório com oportunidades de melhoria.', 30);


-- ====== tabela funcionario departamento ======

insert into tbl_funcionario_departamento
(id_funcionario, id_departamento) values

(1, 1),
(9, 1),
(17, 1),
(25, 1),

(2, 2),
(10, 2),
(18, 2),
(26, 2),

(3, 3),
(11, 3),
(19, 3),
(27, 3),

(4, 4),
(12, 4),
(20, 4),
(28, 4),

(5, 5),
(13, 5),
(21, 5),
(29, 5),

(6, 8),
(14, 8),
(22, 8),
(30, 8),

(7, 6),
(15, 6),
(23, 6),

(8, 7),
(16, 7),
(24, 7);


-- ====== tabela funcionario email ======

insert into tbl_funcionario_email
(id_funcionario, id_email) values

(1, 9),
(2, 10),
(3, 11),
(4, 12),
(5, 13),
(6, 14),
(7, 15),
(8, 16),
(9, 17),
(10, 18),
(11, 19),
(12, 20),
(13, 21),
(14, 22),
(15, 23),
(16, 24),
(17, 25),
(18, 26),
(19, 27),
(20, 28),
(21, 29),
(22, 30),
(23, 31),
(24, 32),
(25, 33),
(26, 34),
(27, 35),
(28, 36),
(29, 37),
(30, 38);


-- ====== tabela funcionario telefone ======

insert into tbl_funcionario_telefone
(id_funcionario, id_telefone) values

(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20),
(21, 21),
(22, 22),
(23, 23),
(24, 24),
(25, 25),
(26, 26),
(27, 27),
(28, 28),
(29, 29),
(30, 30);


-- ====== tabela funcao funcionario ======

insert into tbl_funcao_funcionario
(id_funcao, id_funcionario) values

(1, 1),
(2, 9),
(1, 17),
(2, 25),

(3, 2),
(3, 10),
(3, 18),
(3, 26),

(4, 3),
(4, 11),
(4, 19),
(4, 27),

(5, 4),
(5, 12),
(5, 20),
(5, 28),

(6, 5),
(6, 13),
(6, 21),
(6, 29),

(9, 6),
(9, 14),
(9, 22),
(9, 30),

(7, 7),
(7, 15),
(7, 23),

(8, 8),
(8, 16),
(8, 24);


-- ====== tabela competencia funcionario ======

insert into tbl_competencia_funcionario
(id_competencia, id_funcionario) values

(1, 1),
(2, 1),
(4, 1),
(5, 1),

(6, 2),
(7, 2),
(13, 2),
(14, 2),

(1, 3),
(4, 3),
(9, 3),

(5, 4),
(7, 4),
(11, 4),
(14, 4),

(1, 5),
(2, 5),
(8, 5),

(4, 6),
(9, 6),
(10, 6),

(2, 7),
(3, 7),
(12, 7),
(14, 7),

(4, 8),
(6, 8),
(9, 8),

(1, 9),
(2, 9),
(5, 9),
(10, 9),

(6, 10),
(7, 10),
(11, 10),
(13, 10),

(4, 11),
(5, 11),
(7, 11),

(1, 12),
(8, 12),
(12, 12),

(6, 13),
(9, 13),
(15, 13),

(2, 14),
(5, 14),
(13, 14),

(3, 15),
(4, 15),
(10, 15),
(14, 15),

(4, 16),
(9, 16),
(15, 16),

(1, 17),
(2, 17),
(8, 17),
(14, 17),

(6, 18),
(7, 18),
(9, 18),

(1, 19),
(3, 19),
(10, 19),
(14, 19),

(5, 20),
(7, 20),
(11, 20),

(2, 21),
(3, 21),
(12, 21),
(14, 21),

(4, 22),
(9, 22),
(10, 22),

(6, 23),
(8, 23),
(13, 23),

(4, 24),
(5, 24),
(9, 24),

(1, 25),
(2, 25),
(3, 25),
(14, 25),

(6, 26),
(7, 26),
(13, 26),
(14, 26),

(4, 27),
(9, 27),
(15, 27),

(1, 28),
(5, 28),
(12, 28),

(2, 29),
(3, 29),
(8, 29),
(14, 29),

(4, 30),
(6, 30),
(7, 30);


-- ====== tabela meta organizacional funcionario ======

insert into tbl_meta_organizacional_funcionario
(id_meta_organizacional, id_funcionario) values

(1, 1),
(2, 1),
(3, 1),

(1, 2),
(4, 2),
(6, 2),

(2, 3),
(3, 3),

(1, 4),
(4, 4),
(6, 4),

(1, 5),
(5, 5),

(2, 6),
(4, 6),

(1, 7),
(3, 7),
(5, 7),

(2, 8),
(4, 8),
(6, 8),

(1, 9),
(3, 9),

(1, 10),
(4, 10),
(6, 10),

(2, 11),
(3, 11),

(1, 12),
(5, 12),

(3, 13),
(4, 13),

(1, 14),
(2, 14),
(6, 14),

(1, 15),
(3, 15),
(5, 15),

(2, 16),
(4, 16),

(1, 17),
(3, 17),

(4, 18),
(6, 18),

(1, 19),
(3, 19),
(5, 19),

(1, 20),
(4, 20),

(1, 21),
(3, 21),
(5, 21),

(2, 22),
(4, 22),

(1, 23),
(6, 23),

(3, 24),
(4, 24),

(1, 25),
(3, 25),
(5, 25),

(1, 26),
(4, 26),
(6, 26),

(2, 27),
(3, 27),

(1, 28),
(4, 28),
(6, 28),

(1, 29),
(3, 29),
(5, 29),

(2, 30),
(4, 30);


-- ====== tabela departamento email ======

insert into tbl_departamento_email
(id_departamento, id_email) values
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8);


-- ====== tabela departamento telefone ======

insert into tbl_departamento_telefone
(id_departamento, id_telefone) values
(1, 31),
(2, 32),
(3, 33),
(4, 34),
(5, 35),
(6, 36),
(7, 37),
(8, 38);