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
router.get('/:id',(req, res) =>{
    const id = req.params.id;
    res.json({ mensagem:`PEGAR SOMENTE OS REGISTROS COM ID:${id} `});
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