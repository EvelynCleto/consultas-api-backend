const express = require('express');
const consultasRoutes = require('./routes/consultasRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(consultasRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})