var db = require('../db/db')

const { Sequelize, DataTypes } = require('sequelize')
const Pedido = require('./Pedido')
const Produto = require('./Produto')

const Item = db.define('Item', {


    item: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    produto: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    gbu: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    valor_unit: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    desc1: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    valor_unit1: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    desc2: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    valor_unit2: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    desc_final: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    valor_unit3: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    total: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    idPedido: {
        references: { model : 'Pedidos', key: 'id'},
        type: DataTypes.STRING,
        allowNull: false,
    },

    idProduto: {
        references: { model : 'Produtos', key: 'id'},
        type: DataTypes.STRING,
        allowNull: false,
    }

})

// db.sync({force:true})


Item.belongsTo(Pedido, { allowNull: false, constraint:true, foreignKey: 'idPedido'})
Item.belongsTo(Produto, { allowNull: false, constraint:true, foreignKey: 'idProduto'})


module.exports = Item