
const { tools } = require('../models/tools');

const criarTool = (req, res) => {
  const { title, link, description, tags } = req.body;

  if (!title || !link|| !description|| !tags) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
  }

  const tool = { id: tools.length + 1, title, link, description, tags };
  tools.push(tool);

  res.status(201).json(tool);
};

const listarTodasTools = (req, res) => {
  res.json(tools);
};


const listarToolsPorTag = (req, res) => {
  const {tag} = req.query;

  if (!tag) {
    return res.status(400).json({ error: 'A tag é obrigatória!' });
  }

  const toolsFiltradas = tools.filter((tool) => tool.tags.includes(tag));

  if (toolsFiltradas.length === 0) {
    return res.status(404).json({ message: 'Nenhuma ferramenta encontrada com essa tag' });
  }

  res.json(toolsFiltradas);
};

const deletarTool = (req, res) => {
    const {id} = req.params;
    console.log("tentando deletar com id:", id);
    
    const index = tools.findIndex((tool) => tool.id === parseInt(id));
    if(index === -1) {
        return res.status(404).json({error: 'Ferramenta não encontrada'});
    }

    tools.splice(index, 1)
    res.status(204).send();
}

module.exports = {
  criarTool,
  listarTodasTools,
  listarToolsPorTag,
  deletarTool
};
