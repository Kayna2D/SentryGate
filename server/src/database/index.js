const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Aluno = require('../models/Aluno');
const Responsavel = require('../models/Responsavel');
const Conta = require('../models/Conta');
const ResponsavelAluno = require('../models/ResponsavelAluno');
const Aula = require('../models/Aula');
const Professor = require('../models/Professor');
const Materia = require('../models/Materia');
const Turma = require('../models/Turma');
const Chamada = require('../models/Chamada');

// Criando uma const para usar a configuração que usei para conectar com o banco de dados
const connection = new Sequelize(dbConfig);

Aluno.init(connection);
Responsavel.init(connection);
Conta.init(connection);
ResponsavelAluno.init(connection);
Aula.init(connection);
Professor.init(connection);
Materia.init(connection);
Turma.init(connection);
Chamada.init(connection);

Aluno.associate(connection.models);
Responsavel.associate(connection.models);
Conta.associate(connection.models);
ResponsavelAluno.init(connection);
Aula.associate(connection.models);
Professor.associate(connection.models);
Materia.associate(connection.models);
Turma.associate(connection.models);
Chamada.associate(connection.models);


module.exports = connection;