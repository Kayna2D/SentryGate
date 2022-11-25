const { findOne } = require('../models/Aula')
const Aula = require('../models/Aula');
const Materia = require('../models/Materia')


module.exports = {
    async index(req, res) {
        const aulas = await Aula.findAll();
        return res.json(aulas);
    },

    async store(req, res) {
        // const { id_aula, id_aluno  } = req.params;
        //Recebendo os valores do frontend pelo corpo da requisição
        const {
            tema_aula,
            quantidade_aula,
            data_aula,
            nome_materia
        } = req.body;

        const materia = await Materia.findOne({
            where: {
                nome_materia
            }
        }) 

        //Criando os valores recebidos na tabela        
        const [aula, created] = await Aula.findOrCreate({
            where: { 
                tema_aula 
            },
            defaults: {
                tema_aula,
                quantidade_aula,
                data_aula
            }
        });

        await materia.addAulas(aula);

        if (!created) {
            return res.status(302).json("class already registered")
        } else {
            //Recebendo a respostada da requisição
            return res.status(200).json();
        }
    }
}
