const express = require('express');

const {
    criarTool,
    listarTodasTools,
    listarToolsPorTag,
    deletarTool
} = require('../controllers/toolsController');

const router = express.Router();

router.post('/tools', criarTool);
router.get('/tools/todas', listarTodasTools);
router.get('/tools/search', listarToolsPorTag);
router.delete('/tools/:id', deletarTool);

module.exports = router;
