const Aula = require('../models/Aula');

module.exports = {
    async index(req, res) {
        const aulas = await Aula.findAll();

        return res.json(aulas)
    },

    async store(req, res) {
        const { quantidade, data } = req.body;
    }
}