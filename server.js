const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

/* express.static() -> espera um caminho absoluto para um diretório (pasta) onde os arquivos arqui-
vos estáticos serão servidos.
path.join() -> constrói o caminho absoluto.
*/
app.use(express.static(path.join(__dirname, 'views')));

// GET requests
/*
Ao acessar a rota raíz '/', o servidor envia um arquivo index.html como resposta para o navegador.
path.join() -> mostra o caminho específico do arquivo index.html
*/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get("/contato", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.listen(port, (req, res) => {
    console.log(`Server is running at http://localhost:${port}`);
});