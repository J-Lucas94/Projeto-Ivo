const Pedido = require('../models/Pedido')
const Item = require('../models/Item')
const sequelize = require('../db/db')

module.exports = class AuthController {
    static registrar(req, res) {
        res.render("pedido/registrar")
    }

    static async registrarPost(req, res) {

         try {
            //  var pedido
            //  if (true) {
            //      pedido = req.body
            //   } else {
            //      pedido = {
            //         id: req.body.id,
            //      vendedor: req.body.vendedor
            //     }
            // }

        var pedido = {
            item: req.body.item,
            vendedor: req.body.vendedor,
            cod_cliente: req.body.cod_cliente,
            loja_numero: req.body.loja_numero,
            data: req.body.data,
            razao_social: req.body.razao_social,
            cep: req.body.cep,
            endereco: req.body.endereco,
            bairro: req.body.bairro,
            municipio: req.body.municipio,
            email: req.body.email,
            fone: req.body.fone,
            contato: req.body.contato,
            cpf: req.body.cpf,
            uf: req.body.uf,
            inscricao: req.body.inscricao,
            cod_pagamento: req.body.cod_pagamento,
            transportadora: req.body.transportadora,

        }

            var idPedido
            if (req.body.id == undefined) {
                idPedido = await Pedido.create(pedido)
            } else {
                idPedido = req.body.id
                await Pedido.update(pedido, { where: { id: req.body.id } })
            }


            if (pedido) {
                var itens = req.body.itens
                itens.map(async (item) => {
                    console.log(item)
                    var searchItem = await Item.findOne({
                        raw: true
                        , where: {
                            id_pedido: idPedido
                            , item: item.item
                        }
                    })
                    if (searchItem) {
                        await Item.update(item, {
                            where: {
                                Id_pedido: idPedido
                                , item: item.item
                            }
                        })
                    } else {
                        item.Id_pedido = idPedido
                        await Item.create(item)
                    }
                    res.status(200).json({ message: "Registro realizado com sucesso !", id_pedido: pedidoCriado });
                })
            }

        } catch (error) {
            res.status(400).json({ message: "Não foi possivel registrar !" + console.log(error) });
            return
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
        }


    }
}