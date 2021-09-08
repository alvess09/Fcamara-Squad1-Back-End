/* Criando um Servidor c/ express*/
const express = require('express');
const morgan = require("morgan");
const app = express();

app.use(morgan('dev'));

//Rotas de acesso

// PEGAR TODAS AS ROTAS
app.get('/', (req, res) =>{
    //regra de negocio entra aqui
    res.json({ mensagem:'PEGAR TODOS OS REGISTROS'});
});

// PEGAR SOMENTE REGISTRO COM ID
app.get('/:id',(req, res) =>{
    const id = req.params.id;
    res.json({ mensagem:`PEGAR SOMENTE OS REGISTROS COM ID:${id} `});
});

// CRIAR UM REGISTRO 
app.post('/',(req, res) =>{
    const body = req.body
    res.json(body);
});

// ATUALIZAR SOMENTE REGISTRO COM ID
app.put('./:id', (req, res) => {
    res.json({mensagem: `ATUALIZAR SOMENTE O REGISTRO COM ID: ${id}`});
});

// DELETAR SOMENTE REGISTRO COM ID
app.delete('./:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `DELETAR SOMENTE O REGISTRO COM O ID: ${id}`});
});




// Inicialização do Servidor
app.listen(3000, () =>{
    console.log("Meu Servidor está funcionando!")
});
