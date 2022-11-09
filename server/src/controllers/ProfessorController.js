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
            cep,
            cidade,
            bairro,
            rua,
            complemento,
            tel,
         } = req.body;

        const professor = await Professor.create({ 
            nome, 
            sobrenome,
            nome_social,
            data_nasc,
            genero,
            rg,
            cpf,
            cep,
            cidade,
            bairro,
            rua,
            complemento,
            tel
        });

        return res.json(professor);
    }
};