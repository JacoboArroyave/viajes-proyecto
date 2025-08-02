const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/cliente.controller');

router.post('/', ClienteController.crearCliente);
router.get('/', ClienteController.obtenerClientes);
router.get('/:id', ClienteController.obtenerClientePorId);
router.put('/:id', ClienteController.actualizarCliente);
router.delete('/:id', ClienteController.eliminarCliente);

module.exports = router;
