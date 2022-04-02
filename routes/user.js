const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const departmentController = require('../controller/DepartementController');
const {Department ,User} =require('../models/index');


// use routers

router.post('/add-department' ,departmentController.createDepartement);
router.get('/add-department' , (req, res)=>{res.render('add_department')});

router.get('/departments' , departmentController.getDepartements);
router.get('/department/:id/users' , userController.getUsersByDepartementId);

router.get('/departement/:id/add-user' , (req,res) => { res.render('add_user',{DepartementId : req.params.id}); });
router.post('/departement/:id/add-user' ,userController.addUserToDepartement);
router.get('/departement/:id/delete-user/:id_user',userController.deleteUser);

router.get('/department/:id/update-user/:id_user', userController.getUserToUpdate);
router.post('/department/:id/update-user/:id_user', userController.updateUser);


module.exports = router ;