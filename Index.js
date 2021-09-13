/* Criando um Servidor c/ express*/
const express = require('express');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const routes = require('./src/routes/agendamento.routes');


//conexão com o banco de dados OBS INSERIR LINK DB ATLAS
mongoose.connect("mongodb+srv://dev:fcamarasquad1@cluster0.k1pgm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true
}).then(() => {
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB:" + err)
});
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);







// Inicialização do meu  Servidor na porta 3000.
app.listen(3000, () => {
    console.log("Meu Servidor está funcionando!")
});
