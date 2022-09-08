var db = require('../db/db')

const { Sequelize, DataTypes } = require('sequelize')
const Pedido = require('./Pedido')

const Item = db.define('Item', {


    item: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio !"
            }
        }
    },
    produto: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio !"
            }
        }
    },

    gbu: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio !"
            }
        }
    },

    valor_unit: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    desc1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    valor_unit1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    desc2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    valor_unit2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    desc_final: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    valor_unit3: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    total: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },  

})

//  db.sync({force:true})

Item.belongsTo(Pedido, {foreignKey: 'Id_pedido', allowNull: false})

module.exports = Item