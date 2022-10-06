var db = require('../db/db')

const { Sequelize, DataTypes } = require('sequelize')

const Produto = db.define('Produto', {
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cod_produto: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    descricao : {
        type: DataTypes.STRING,
        allowNull: false,
    },

    gbu : {
        type: DataTypes.STRING,
        allowNull: false,
    },

    precos : {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

// Produto.sync({force:true})


module.exports = Produto