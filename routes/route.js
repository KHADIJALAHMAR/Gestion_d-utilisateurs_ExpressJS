const express =require('express');
const router =express.Router();
const database =require('../config/database');


router.get("/all",(req,res) =>{
    database.Department.findAll()
    .then(Deparetements => res.send(Deparetements))
})
module.export = router ;