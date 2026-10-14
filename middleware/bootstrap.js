/***************************************************************************************
 * Objetivo: Arquivo responsável pela verificação da existência de administrativos no sistema.
 * Autor: Gustavo Vidal de Abreu
 * Data: 15/06/2026 (segunda-feira)
 * Versão: 1.1
***************************************************************************************/

// Import do DAO do administrativo
const administrativoDAO = require('../model/DAO/administrativo/administrativo.js')

// Import do arquivo de verificação de JWT
const autenticar = require('./auth.js')

// Função que verifica a existência de administrativos cadastrados no sistema
const bootstrap = async function (request, response, next) {
    // Chama o DAO de administrativos
    let listaAdministrativos = await administrativoDAO.selectAllAdministrativo()

    // Só libera a requisição sem token se a consulta funcionou e não há nenhum administrativo cadastrado
    if (Array.isArray(listaAdministrativos) && listaAdministrativos.length === 0) {
        // Caso não exista nenhum, permite criar o primeiro
        next()
    } else {
        // Caso exista (ou a consulta tenha falhado), exige o token JWT
        return autenticar(request, response, next)
    }
}

module.exports = bootstrap
