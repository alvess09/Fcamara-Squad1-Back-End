const { response } = require('express');
const express  = require('express');
const router = express.Router();
const Consultor = require('../models/consultor');

//Rotas de acesso

// PEGAR TODAS AS ROTAS
router.get('/', async (req, res) =>{
    //regra de negocio entra aqui
    try {
        const consultor = await Consultor.find({});
        res.json({ error: false, consultor });
    } catch (err) {
        res.json({ error: true, message: err.mensagem });
    }
});

// PEGAR SOMENTE REGISTRO COM ID
router.get('/:id', async (req, res) =>{
    try {
        const id = req.params.id;
        const consultor = await Consultor.findByID(id);
        res.json({ error: false, consultor });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }

});

// CRIAR UM REGISTRO 
router.post('consultor', async (req, res) =>{
    try{
        const consultor = req.body;
    const response = await new Consultor(consultor).save();
    res.json({error : false, consultor : response});

    } catch (err) {
        res.json({error : true, message : err.message});
    }
    
});

// ATUALIZAR SOMENTE REGISTRO COM ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const novo_consultor = req.body;

        const consultor = await Consultor.findByIDAndUpdate(id, novo_consultor);
        res.json({ error: false, consultor});

    } catch (err) {
        res.json({ error: true, message: err.message });
    }
    
});

// DELETAR SOMENTE REGISTRO COM ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Consultor.findByIDAndDelete(id);
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }

});



module.exports = router;