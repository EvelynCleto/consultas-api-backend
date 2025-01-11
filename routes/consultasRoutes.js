const express = require('express');

const {
    criarConsulta,
    listarTodasConsultas,
    listarConsultasPorUsuario,
} = require('../controllers/consultasController');

const router = express.Router();

// Rota POST para criar uma nova consulta
router.post('/consultas', criarConsulta);

// Rota GET para listar todas as consultas
router.get('/consultas/todas', listarTodasConsultas);

// Rota GET para listar consultas por usuário
router.get('/consultas/usuario', listarConsultasPorUsuario);

module.exports = router;
