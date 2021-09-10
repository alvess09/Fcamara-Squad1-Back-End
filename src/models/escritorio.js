// model escritório 
const mongoose = require('mongoose');

const Escritorio = mongoose.model(
    'Escritorio', {
    cidade: String
});

module.exports = Escritorio;