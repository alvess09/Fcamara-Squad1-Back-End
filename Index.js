/* Criando um Servidor c/ express*/
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const morgan = require("morgan");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const routes = require('./src/routes/agendamento.routes');
const consultorroutes = require('./src/routes/consultor.routes');
const escritorioroutes = require('./src/routes/escritorio.routes');
const mesaroutes = require('./src/routes/mesa.routes');


//conexão com o banco de dados OBS INSERIR LINK DB ATLAS
mongoose.connect(`${process.env.DB_URL}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
}).then(() => {
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB:" + err)
});
app.use('/api-docs' , swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// DIRECIONAMENTO DAS ROTAS 
app.use('/', routes);
app.use('/consultor', consultorroutes);
app.use('/escritorio', escritorioroutes);
app.use('/mesa', mesaroutes);








// Inicialização do meu  Servidor na porta 3000.
app.listen(3000, () => {
    console.log("Meu Servidor está funcionando!")
});
//teste alteração index