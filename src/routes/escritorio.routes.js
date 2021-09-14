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
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const novo_escritorio = req.body;

        const escritorio = await Escritorio.findByIdAndUpdate(id, novo_escritorio);
        res.json({ error: false, escritorio});

    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

// DELETAR SOMENTE REGISTRO COM ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Escritorio.findByIDAndDelete(id);
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});



module.exports = router;