const express = require('express')
const router = express.Router()

const PedidoController = require('../controller/PedidoController')

const { eAdmin } = require('../helpers/eAdmin')

router.get('/registrar/:id?', PedidoController.registrar)
router.post('/registrar', PedidoController.registrarPost)
router.get('/lista', PedidoController.lista)
router.get('/produtos/:cod_produto', PedidoController.produtos)

module.exports = router