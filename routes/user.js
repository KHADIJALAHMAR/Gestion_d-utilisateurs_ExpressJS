// const express =require('express');
// const { append } = require('express/lib/response');
const express = require('express');
const router = express.Router();
// const database =require('../config/database');
const userController = require('../controllers/userController');
// const userController = require('../controllers/userController');

// const database =require('../config/database');


router.get('/' , userController.getUsers);
router.get('/user' , userController.getAll)
module.exports = router ;

// router.get('/', userController.getUsers);
// router.get('/' ,(req, res) => res.send('douaa'))
// router.get("/all",(req,res) =>{
//     database.Department.findAll()
//     .then(Deparetements => res.send(Deparetements))
// })
// module.exports = router ;