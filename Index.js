const dotenv = require('dotenv');
dotenv.config();
/* Criando um Servidor c/ express*/
const express = require('express');
const morgan = require("morgan");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const routes = require('./src/routes/agendamento.routes');
const consultorroutes = require('./src/routes/consultor.routes');


//conexão com o banco de dados OBS INSERIR LINK DB ATLAS
mongoose.connect(`${process.env.DB_URL}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
}).then(() => {
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB:" + err)
});
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/', routes);
app.use('/consultor', consultorroutes);







// Inicialização do meu  Servidor na porta 3000.
app.listen(3000, () => {
    console.log("Meu Servidor está funcionando!")
});
//teste alteração index