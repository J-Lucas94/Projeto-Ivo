const Pedido = require('../models/Pedido')
const Item = require('../models/Item')
const Produto = require('../models/Produto')
const sequelize = require('../db/db')
const { raw } = require('body-parser')
const e = require('connect-flash')

module.exports = class AuthController {
    static async registrar(req, res) {

        var produto = await Produto.findAll({ raw: true })

        if (req.params.id) {
            var pedido = await Pedido.findOne({ raw: true, where: { id: req.params.id } })
            var itens = await Item.findAll({ raw: true, where: { idPedido: req.params.id } })
            res.render("pedido/registrar", { pedido: pedido, itens: itens, produto: produto })
        } else {
            res.render("pedido/registrar", { produto: produto })
        }
    }

    static async registrarPost(req, res) {

        try {

            if (!req.body.itens) {
                return res.status(400).json({ message: "Item não encontrado" })
            }

            var id_pedido
            var idPedido

            var pedido = req.body

            if (req.body.idPedido == "") {
                idPedido = await Pedido.create(pedido)
                id_pedido = idPedido.id
            } else {

                var confPedido = await Pedido.findOne({ where: { id: req.body.idPedido } })

                if (confPedido) {
                    idPedido = req.body.idPedido
                    var pedido = await Pedido.update(pedido, { where: { id: req.body.idPedido } })
                    id_pedido = req.body.idPedido
                } else {
                    return res.status(400).json({ message: "Id não encontrado" })

                }
            }

            if (pedido) {

                var items = req.body.itens

                if (req.body.idPedido) {
                    Item.destroy({ where: { idPedido: idPedido } })
                }

                items.map(async (item) => {
                    var searchItem = await Item.findOne({
                        raw: true
                        , where: {
                            idPedido: id_pedido,
                            item: item.item
                        }
                    })

                    var searchProd = await Produto.findOne({ where: { cod_produto: item.item } })

                    if (searchItem) {
                        await Item.update(item, {
                            where: {
                                idPedido: id_pedido,
                                item: item.item
                            }
                        })

                    } else {
                        var idProduto = searchProd.id
                        item.idProduto = idProduto
                        item.idPedido = id_pedido
                        await Item.create(item)
                    }
                })
                if (pedido && items) {
                    return res.json({ message: "Registro realizado com sucesso", id_pedido: id_pedido })
                } else {
                    return res.status(400).json({ message: "Não foi possivel realizar o pedido" })
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    static async produtos(req, res) {
        var produtos = await Produto.findOne({ raw: true, where: { cod_produto: req.params.cod_produto } })

        if(produtos){   
            res.json(produtos)
        }else{
            res.status(400).json({message: "Não foi encontrado"})
        }
    }


    static async lista(req, res) {

        try {
            const listaPedidos = await Pedido.findAll({
            });

            const lista = listaPedidos.map((result) => result.get({ plain: true }));

            res.render('pedido/lista', { lista: lista })

        } catch (error) {
            console.log(error)
            return
        }
    }
}