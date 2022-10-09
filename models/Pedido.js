var db = require('../db/db')

const { Sequelize, DataTypes } = require('sequelize')

const Pedido = db.define('Pedido', {
    
    vendedor: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cod_cliente : {
        type: DataTypes.STRING,
        allowNull: false,
    },

    loja_numero: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    data: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    razao_social: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    municipio: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    uf: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    fone: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    contato: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    inscricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cond_pagamento: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    transportadora: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    

})

// Pedido.sync({force:true})

module.exports = Pedido