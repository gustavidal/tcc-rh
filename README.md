# Colabore — Backend organizado no padrão MedTime

Cada tabela possui DAO, Service, Controller e Route independentes.

- `models/DAO/<tabela>/<tabela>.js`: executa a procedure com Knex e parâmetros posicionais.
- `services/<tabela>/service_<tabela>.js`: valida dados, chama a DAO e retorna mensagens.
- `controllers/<tabela>/controller_<tabela>.js`: lida com as regras da requisição.
- `routes/<tabela>.router.js`: disponibiliza os endpoints separados.
- `models/global_knex`: conexão Knex; `middleware`: autenticação/autorização.
- `database`: SQL do banco corrigido, incluindo views e procedures.

## Execução

1. Configure suas variáveis de ambiente (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` e `JWT_SECRET`) de acordo com os arquivos de configuração.
2. `npm install`
3. `npm start`

As rotas das tabelas usam `/api/recursos/<recurso>`. Os fluxos compostos ainda são rotas específicas de ações/conta.

**Atenção**: esta é uma revisão de estrutura e escrita. Não foi possível executar o MySQL real nem homologar todos os fluxos.
