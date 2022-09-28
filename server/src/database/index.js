const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Responsavel = require('../models/Responsavel');

// Criando uma const para usar a configuração que usei para conectar com o banco de dados
const connection = new Sequelize(dbConfig);

Responsavel.init(connection);


module.exports = connection;