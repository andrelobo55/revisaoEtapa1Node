const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

/* express.static() -> espera um caminho absoluto para um diretório (pasta) onde os arquivos
estáticos serão servidos.
path.join() -> constrói o caminho absoluto.
*/
app.use(express.static(path.join(__dirname, 'views')));

/*
express.urlencoded({extended: true}) -> permite buscar os parâmetros do corpo da página html, como
o req.body.nome, req.body.email etc.
*/
app.use(express.urlencoded({extended: true}));

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

app.get("/sugestao", (req, res) => {
    const nome = req.query.nome;
    const ingredientes = req.query.ingredientes;
    res.send(`
            <!DOCTYPE html>
            <html lang="pt-br">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Sugestão</title>
            </head>
            <body>
                <h1>Sugestão</h1>
                <p>Sugestão recebida! Obrigado!</p>
                <p><strong>Nome: </strong> ${nome}</p>
                <p><strong>Ingredientes: </strong> ${ingredientes}</p>
                <a href='/'>Voltar para o início</a>
            </body>
            </html>
        `);
});

// POST requests
app.post("/contato", (req, res) => {
    let name = req.body.nome;
    let email = req.body.email;
    let assunto = req.body.assunto;
    let msg = req.body.mensagem;
    res.send(`
            <!DOCTYPE html>
            <html lang="pt-br">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contato recebido</title>
            </head>
            <body>
                <p>Contato recebido! Obrigado!</p>
                <p><strong>Nome: </strong>${name}</p>
                <p><strong>E-mail: </strong>${email}</p>
                <p><strong>Assunto: </strong>${assunto}</p>
                <p><strong>Mensagem: </strong>${msg}</p>
                <a href='/'>Voltar para o início</a>
            </body>
            </html>
        `);
});

app.listen(port, (req, res) => {
    console.log(`Server is running at http://localhost:${port}`);
});