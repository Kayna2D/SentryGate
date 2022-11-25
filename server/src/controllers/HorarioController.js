const Horario = require('../models/Horario');
const { findOne } = require('../models/Horario');
const Turma = require('../models/Turma');
const Materia = require('../models/Materia');


module.exports = {
    async index(req, res) {
        const horarios = await Horario.findAll();
        return res.json(horarios);
    },

    async store(req, res) {
        //Recebendo os valores do frontend pelo corpo da requisição
        const {
            dia_horario,
            hora_horario,          
            nome_turma,
            nome_materia
        } = req.body;

        const turma = await Turma.findOne({
            where: { nome_turma }
        }) 

        const materia = await Materia.findOne({
            where: { nome_materia }
        })


        const [horario, created] = await Horario.findOrCreate({
            where: { 
                dia_horario,
                hora_horario
            },
            defaults: {
                dia_horario,
                hora_horario,
            }
        });

        await turma.addHorarios(horario);
        await materia.addHorarios(horario);

        if (!created) {
            return res.status(302).json("time already registered")
        } else {
            //Recebendo a respostada da requisição
            return res.status(200).json();
        }
    }
}
