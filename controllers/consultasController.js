// controllers/consultasController.js

const { consultas } = require('../models/consulta');

// Criar uma nova consulta
const criarConsulta = (req, res) => {
  const { titulo, usuario } = req.body;

  if (!titulo || !usuario) {
    return res.status(400).json({ error: 'Título e usuário são obrigatórios!' });
  }

  const consulta = { id: consultas.length + 1, titulo, usuario };
  consultas.push(consulta);

  res.status(201).json(consulta);
};

// Listar todas as consultas
const listarTodasConsultas = (req, res) => {
  res.json(consultas);
};

// Listar consultas por usuário
const listarConsultasPorUsuario = (req, res) => {
  const usuario = req.query.usuario;

  if (!usuario) {
    return res.status(400).json({ error: 'Usuário é obrigatório!' });
  }

  const consultasFiltradas = consultas.filter((consulta) => consulta.usuario === usuario);

  if (consultasFiltradas.length === 0) {
    return res.status(404).json({ message: 'Nenhuma consulta encontrada para esse usuário' });
  }

  res.json(consultasFiltradas);
};

module.exports = {
  criarConsulta,
  listarTodasConsultas,
  listarConsultasPorUsuario,
};
