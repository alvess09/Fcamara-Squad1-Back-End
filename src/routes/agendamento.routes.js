const { response } = require('express');
const express  = require('express');
const router = express.Router();
const Agendamento = require('../models/agendamento');
 
//Rotas de acesso

// PEGAR TODAS AS ROTAS
router.get('/', async (req, res) =>{
    //regra de negocio entra aqui
    try {
        const agendamento = await Agendamento.find({});
        res.json({ error: false, agendamento });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

// PEGAR SOMENTE REGISTRO COM ID
router.get('/:id', async(req, res) =>{
    try {
        const id = req.params.id;
        const agendamento = await Agendamento.findById(id);
        res.json({ error: false, agendamento })
    } catch (err) {
        res.json({ error: true, message: err.message });
    }

});

// CRIAR UM REGISTRO 
router.post('/', async (req, res) =>{
    try{
        const agendamento = req.body;
    const response = await new Agendamento(agendamento).save();
    res.json({error : false, agendamento : response});

    } catch (err) {
        res.json({error : true, message : err.message});
    }
    
});

// ATUALIZAR SOMENTE REGISTRO COM ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const novo_agendamento = req.body;

        const agendamento = await Agendamento.findByIdAndUpdate(id, novo_agendamento);
        res.json({ error: false, agendamento});

    } catch (err) {
        res.json({ error: true, message: err.message });
    }
    
});

// DELETAR SOMENTE REGISTRO COM ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Agendamento.findByIdAndDelete(id);
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }

});



module.exports = router;