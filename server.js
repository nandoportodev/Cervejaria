const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/cervejas'); // Alterado para corresponder ao arquivo de rotas das cervejas

const port = 3000;
const app = express();

// Configuração para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

app.use(bodyParser.json());
app.use('/cervejas', routes); // Alterado para refletir o caminho correto das rotas das cervejas

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
});
