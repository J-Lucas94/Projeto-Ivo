const express = require('express')
const router = express.Router()

const PedidoController = require('../controller/PedidoController')

const { eAdmin } = require('../helpers/eAdmin')

router.get('/registrar', PedidoController.registrar)
router.post('/registrar', PedidoController.registrarPost)
router.get('/lista', PedidoController.lista)

module.exports = router