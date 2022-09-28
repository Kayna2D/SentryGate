const express = require('express');
const AlunoController = require('../controllers/AlunoController');
const ResponsavelController = require('../controllers/ResponsavelController');
const TurmaController = require('../controllers/TurmaController')

const routes = express.Router();

routes.post('/alunos', AlunoController.index);
routes.post('/aluno', AlunoController.store);

routes.get('/responsaveis', ResponsavelController.index);
routes.post('/responsavel', ResponsavelController.store);

routes.post('/turma/criar', TurmaController.create);

module.exports = routes;