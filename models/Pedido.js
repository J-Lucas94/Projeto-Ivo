var db = require('../db/db')

const { Sequelize, DataTypes } = require('sequelize')

const Pedido = db.define('Pedido', {
    
    vendedor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio !"
            }
        }
    },

    cod_cliente : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio !"
            }
        }
    },

    loja_numero: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    data: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    razao_social: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    cep: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    bairro: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    municipio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    uf: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    fone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio! "
            }
        }
    },

    contato: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio! "
            }
        }
    },

    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio! "
            }
        }
    },

    inscricao: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    cod_pagamento: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    transportadora: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg : "Esse campo não pode ser vazio ! "
            }
        }
    },

    // desconto: {
    //     type: DataTypes.BOOLEAN,
    //     allowNull: false,
    //     validate: {
    //         notEmpty: {
    //             msg : "Esse campo não pode ser vazio ! "
    //         }
    //     }
    // },

})

// Pedido.sync({alter:true})

module.exports = Pedido