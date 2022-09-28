const res = require('express/lib/response');
const sequelize = require('sequelize');
const model = require('../models/Turma');
const turma = model.Turma;
const aluno = model.Aluno;

module.exports = {
    async create(request, response){
        try {
            const {
                aluno_id,
                nome,
                horario,
                ano
            } = request.body

            const Turma = await turma.create({
                aluno_id,
                nome,
                horario,
                ano
            });

            return response.json({ msg: "Turma cadastrada com sucesso!!" });

        } catch (error) {
            return response.json({ msg: "Não foi possivel cadastrar " + error });
        }
    }, 

    
}