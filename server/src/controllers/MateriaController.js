const Materia = require('../models/Materia');

module.exports = {
    async index(req, res) {
        const materias = await Materia.findAll();

        return res.json(materias);
    },
    
    async store(req, res) {
        const { 
            nome
         } = req.body;

        const materia = await Materia.create({ 
            nome
        });

        return res.json(materia);
    }
};