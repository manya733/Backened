const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');


router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
        
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
        
    });
   
});
router.get('/getall' ,(req,res)=>{
    Model.find({})
    .then((result) => {
           res.json(result);

        
    }).catch((err) => {
        res.status(500).json(err);
        
    });
})
router.get('/getbyid/:id', (req, res) => {
    console.log(req.params.id);
    Model.findById(req.params.id)
    .then((result) => {
    
        res.json(result);
       }).catch((err) => {
        res.status(500).json(err);
       });
});
router.get('/update', (req, res) => {
    res.send('Response from  user update route');
});
router.get('/getbymail/:email', (req, res) => {

    console.log(req.params.email);
   Model.findOne({email :req.params.email })
   .then((result) => {
    
    res.json(result);
   }).catch((err) => {
    res.status(500).json(err);
   });
});

module.exports = router;// export router

