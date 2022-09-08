const Pedido = require('../models/Pedido')
const Item = require('../models/Item')
const sequelize = require('../db/db')
const { raw } = require('body-parser')

module.exports = class AuthController {
    static registrar(req, res) {
        res.render("pedido/registrar")
    }

    static async registrarPost(req, res) {

        try {

            var pedido = req.body
            var id_pedido
            var idPedido
            if (req.body.id == undefined) {
                idPedido = await Pedido.create(pedido)
                id_pedido = idPedido.id
            } else {
                idPedido = req.body.id
                var id = idPedido
                var pedido = await Pedido.update(id,pedido, { where: { id: req.body.id } })
                id_pedido=req.body.id
            }
            
            if (pedido) {
                console.log("Esteeeee",pedido)
                var items = req.body.itens
                // console.log(items)
                items.map(async (item) => {
                    var searchItem = await Item.findOne({
                        raw: true
                        , where: {
                            Id_pedido: id_pedido,
                            item: item.item                      
                        }
                    })
                    // console.log(id_pedido)
                    if (searchItem) {
                        await Item.update(item, {
                            where: {
                                Id_pedido: id_pedido,
                                 item: item.item
                            }
                        })
                                               
                    } else {
                        item.Id_pedido = id_pedido
                        // console.log(item)
                        var pedidoCriado = await Item.create(item)
                        // console.log(pedidoCriado)
                    }                  
                })
                return res.send({id_pedido: id_pedido})

            }

        } catch (error) {
            return console.log("Aconteceu um  erro !" + error)

        }
    }


    static async lista(req, res) {

        try {
            const listaPedidos = await Item.findAll({
            });

            const lista = listaPedidos.map((result) => result.get({ plain: true }));

            res.render('pedido/lista', { lista: lista })

        } catch (error) {
            console.log(error)
            return
        }
    }
}