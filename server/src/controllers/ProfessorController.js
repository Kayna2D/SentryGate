const Professor = require('../models/Professor');

module.exports = {
    async index(req, res) {
        const professores = await Professor.findAll();

        return res.json(professores);
    },
    
    async store(req, res) {
        const { 
            nome, 
            sobrenome,
            nome_social,
            data_nasc,
            genero,
            rg,
            cpf,
            sexo,
            cep,
            cidade,
            bairro,
            rua,
            tel,
            matricula
         } = req.body;

        const professor = await Professor.create({ 
            nome, 
            sobrenome,
            nome_social,
            data_nasc,
            genero,
            rg,
            cpf,
            sexo,
            cep,
            cidade,
            bairro,
            rua,
            tel,
            matricula
        });

        return res.json(professor);
    }
};