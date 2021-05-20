const router = require('express').Router();
const articulosController = require('../controllers/articulo');
const Articulo = require('../models/articulo');

router.get('/',async (req, res) => {   
    try{
        res.json(await articulosController.indexAll())
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
});

router.post('/',async (req, res) => {
    try{
        const id = await articulosController.store(new Articulo(req.body));
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
})

router.put('/:id',async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await articulosController.update(id,req.body));
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
});

router.delete('/:id',async (req, res) => {
   try{
        const id = req.params.id;
        const status = 'deleted'
        await articulosController.destroy(id);
        res.json({status,id});
   } catch( error ) {
    return res.sendStatus(500).json({
        message: 'Server Error'
    });   
   }

});



module.exports = router; 