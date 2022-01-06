const express =require('express');
const router =express.Router();
const database =require('../config/database');


router.get("/all",(req,res) =>{
    database.Deparetement.findAll()
    .then(Deparetements => res.send(Deparetements))
})
module.export = router ;