const { response } = require('express');
const express  = require('express');
const router = express.Router();
const Escritorio = require('../models/escritorio');
 
//Rotas de acesso

// PEGAR TODAS AS ROTAS
router.get('/', async (req, res) =>{
    //regra de negocio entra aqui
    try {
        const escritorio = await Escritorio.find({});
        res.json({ error: false, escritorio });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

// PEGAR SOMENTE REGISTRO COM ID
router.get('/:id', async (req, res) =>{
    try {
        const id = req.params.id;
        const escritorio = await Escritorio.findById(id);
        res.json({ error: false, escritorio })
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

// CRIAR UM REGISTRO 
router.post('/', async (req, res) =>{
    try{
        const escritorio = req.body;
    const response = await new Escritorio(escritorio).save();
    res.json({error : false, agendamento : response});

    } catch (err) {
        res.json({error : true, message : err.message});
    }
    
});

// ATUALIZAR SOMENTE REGISTRO COM ID
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: `ATUALIZAR SOMENTE O REGISTRO COM ID: ${id}`});
});

// DELETAR SOMENTE REGISTRO COM ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `DELETAR SOMENTE O REGISTRO COM O ID: ${id}`});
});



module.exports = router;