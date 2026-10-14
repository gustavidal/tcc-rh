// Import das dependências para criar a API
const express = require('express')
const cors = require('cors')

// Import do middleware que valida o token JWT
const verificarJWT = require('./middleware/verificar_jwt.js')

// Criando um objeto do express para criar a API
const app = express()

// Prefixo base de todos os endpoints
const PREFIXO = '/v1/colaborar'

// Configurações do CORS da API
const corsOptions = {
    origin: '*',
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: ['Content-type', 'Authorization']
}

// Aplica as configurações no CORS no app (EXPRESS)
app.use(cors(corsOptions))



// ROTAS PÚBLICAS (não exigem token)
// Import do arquivo de rotas da autenticação
const authRouter = require('./routes/auth.router.js')
app.use(PREFIXO + '/auth', authRouter)



// A PARTIR DAQUI TODAS AS ROTAS EXIGEM O TOKEN JWT (Authorization: Bearer <token>)
app.use(PREFIXO, verificarJWT)

// Import do arquivo de rotas do usuário
const usuarioRouter = require('./routes/usuario.router.js')
app.use(PREFIXO + '/usuarios', usuarioRouter)

// Import do arquivo de rotas do administrativo
const administrativoRouter = require('./routes/administrativo.router.js')
app.use(PREFIXO + '/administrativos', administrativoRouter)

// Import do arquivo de rotas do gestor
const gestorRouter = require('./routes/gestor.router.js')
app.use(PREFIXO + '/gestores', gestorRouter)

// Import do arquivo de rotas do funcionário
const funcionarioRouter = require('./routes/funcionario.router.js')
app.use(PREFIXO + '/funcionarios', funcionarioRouter)

// Import do arquivo de rotas da avaliação
const avaliacaoRouter = require('./routes/avaliacao.router.js')
app.use(PREFIXO + '/avaliacoes', avaliacaoRouter)

// Import do arquivo de rotas da competência
const competenciaRouter = require('./routes/competencia.router.js')
app.use(PREFIXO + '/competencias', competenciaRouter)

// Import do arquivo de rotas da meta organizacional
const metaOrganizacionalRouter = require('./routes/meta_organizacional.router.js')
app.use(PREFIXO + '/metas-organizacionais', metaOrganizacionalRouter)

// Import do arquivo de rotas do departamento
const departamentoRouter = require('./routes/departamento.router.js')
app.use(PREFIXO + '/departamentos', departamentoRouter)

// Import do arquivo de rotas do sexo
const sexoRouter = require('./routes/sexo.router.js')
app.use(PREFIXO + '/sexos', sexoRouter)

// Import do arquivo de rotas do cargo
const cargoRouter = require('./routes/cargo.router.js')
app.use(PREFIXO + '/cargos', cargoRouter)

// Import do arquivo de rotas da função
const funcaoRouter = require('./routes/funcao.router.js')
app.use(PREFIXO + '/funcoes', funcaoRouter)

// Import do arquivo de rotas do tipo de telefone
const tipoTelefoneRouter = require('./routes/tipo_telefone.router.js')
app.use(PREFIXO + '/tipos-telefone', tipoTelefoneRouter)

// Import do arquivo de rotas do tipo de e-mail
const tipoEmailRouter = require('./routes/tipo_email.router.js')
app.use(PREFIXO + '/tipos-email', tipoEmailRouter)

// Import do arquivo de rotas do tipo de competência
const tipoCompetenciaRouter = require('./routes/tipo_competencia.router.js')
app.use(PREFIXO + '/tipos-competencia', tipoCompetenciaRouter)

// Import do arquivo de rotas do status de competência
const statusCompetenciaRouter = require('./routes/status_competencia.router.js')
app.use(PREFIXO + '/status-competencia', statusCompetenciaRouter)

// Import do arquivo de rotas do status de funcionário
const statusFuncionarioRouter = require('./routes/status_funcionario.router.js')
app.use(PREFIXO + '/status-funcionario', statusFuncionarioRouter)

// Import do arquivo de rotas do status de meta
const statusMetaRouter = require('./routes/status_meta.router.js')
app.use(PREFIXO + '/status-meta', statusMetaRouter)



// Iniciar a API
app.listen(8080, function () {
    console.log('API aguardando novas requisições...')
})
