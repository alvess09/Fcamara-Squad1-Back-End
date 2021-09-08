/* Criando um Servidor c/ express*/
const express = require('express');
const app = express();

//Rotas de acesso
app.get('/', (req, res) =>{
    //regra de negocio entra aqui
    res.json({ mensagem:'Rota Funcionando'});
});

// Inicialização do Servidor
app.listen(3000, () =>{
    console.log("Meu Servidor está funcionando!")
})
