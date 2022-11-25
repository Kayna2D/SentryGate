const { findOne } = require('../models/Chamada');
const Chamada = require('../models/Chamada')
const Aula = require('../models/Aula');
const Aluno = require('../models/Aluno')


module.exports = {
    async index(req, res) {
        const chamadas = await Chamada.findAll();
        return res.json(chamadas);
    },

    async store(req, res) {
        // const { id_aula, id_aluno  } = req.params;
        //Recebendo os valores do frontend pelo corpo da requisição
        const {
            cpf_aluno,
            tema_aula,
            falta
        } = req.body;

        const aula = await Aula.findOne({
            where: {
                tema_aula
            }
        }) 

        const aluno = await Aluno.findOne({
            where: {
                cpf_aluno
            }
        }) 

        //Criando os valores recebidos na tabela        
        const chamada = await Chamada.create({
                falta
        });

        await aula.addChamadas(chamada);
        await aluno.addChamadas(chamada);

            //Recebendo a respostada da requisição
            return res.status(200).json();
    }
}