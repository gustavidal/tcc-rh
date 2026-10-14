// Carrega as variáveis de ambiente do arquivo .env (necessário também para o CLI do knex)
require('dotenv').config()

module.exports = {
    development: {
        // Define o cliente como 'mysql2'
        client: 'mysql2',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: Number(process.env.DB_PORT) || 3306, // Porta padrão do MySQL

            // Opcional: Define charset (recomendado para UTF8)
            charset: 'utf8mb4'
        },

        // Configurações de Migração
        migrations: {
            tableName: 'knex_migrations', // Nome da tabela de migrações
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds'
        }
    },

    // Você pode adicionar configurações para produção, testes, etc.
};
