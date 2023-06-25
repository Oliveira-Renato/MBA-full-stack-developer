const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// Define o caminho para o diretório onde está o arquivo index.html
const publicDirectoryPath = path.join(__dirname, 'public');

// Define o middleware para servir arquivos estáticos
app.use(express.static(publicDirectoryPath));

app.use(express.json())
app.use(cors())

app.listen(port, console.log(`API listening on port ${port}`))