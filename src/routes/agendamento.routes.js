const { response } = require('express');
const express = require('express');
const router = express.Router();
const Agendamento = require('../models/agendamento');

//Rotas de acesso

// PEGAR TODAS AS ROTAS
router.get('/', (req, res) => {
    //regra de negocio entra aqui
    res.json({ mensagem: 'PEGAR TODOS OS REGISTROS' });
});

// PEGAR SOMENTE REGISTRO COM ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `PEGAR SOMENTE OS REGISTROS COM ID:${id} ` });
});

// CRIAR UM REGISTRO 
router.post('/', async (req, res) => {
    try {
        const agendamento = req.body;
        const response = await new Agendamento(agendamento).save();
        res.json({ error: false, agendamento: response });

    } catch (err) {
        res.json({ error: true, message: err.message });
    }

});

// ATUALIZAR SOMENTE REGISTRO COM ID
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `ATUALIZAR SOMENTE O REGISTRO COM ID: ${id}` });
});

// DELETAR SOMENTE REGISTRO COM ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `DELETAR SOMENTE O REGISTRO COM O ID: ${id}` });
});



module.exports = router;