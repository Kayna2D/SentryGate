'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Prof extends Model {
        static associate(models) {
            this.hasOne(models.AlunoNota,{foreignKey: "prof_id"});
        }
    }
            Prof.init({
                nome: DataTypes.STRING,
                sobrenome: DataTypes.STRING,
                nome_social: DataTypes.STRING,
                data_nasc: DataTypes.STRING,
                genero: DataTypes.STRING,
                rg: DataTypes.STRING,
                cpf: DataTypes.STRING,
                cep: DataTypes.STRING,
                cidade: DataTypes.STRING,
                bairro: DataTypes.STRING,
                rua: DataTypes.STRING,
                complemento: DataTypes.STRING,
                tel: DataTypes.STRING,
                matricula: DataTypes.INTEGER,
                email: DataTypes.STRING,
                senha: DataTypes.STRING,
            }, {
                sequelize,
                modelName: 'Prof',
            });
            return Prof;
        };
        
    
