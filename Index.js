/* Criando um Servidor c/ express*/
const express = require('express');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const routes = require('./src/routes/gobackqg.routes');

//conexão com o banco de dados OBS INSERIR LINK DB ATLAS
// mongoose.connect('mongodb://localhost:27017/db',{
//     useNewUrlParser : true,
//     useUnifieldTopology: true,
// });

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);






// Inicialização do meu  Servidor na porta 3000.
app.listen(3000, () =>{
    console.log("Meu Servidor está funcionando!")
});
