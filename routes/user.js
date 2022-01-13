const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const departmentController = require('../controller/DepartementController');



// use routers
router.get('/' , userController.getAllUsers);
router.get('/departement/:id/add-user' , (req,res) => { res.render('add_user',{DepartementId : req.params.id}); });
router.post('/adduser', userController.adduser);







// department Url and Controller
router.post('/add-departement' , departmentController.createDepartement);
router.get('/allDepartment', departmentController.getAllDepartment);
router.get('/add-departement' , (req,res) => { res.render('add_department'); });


// user  router

app.get('/departement/:id/add-user' , (req,res) => { res.render('add_user',{DepartementId : req.params.id}); });

router.post('update-user/:id', userController.updateUser);

router.delete('delete-user/:id',userController.deleteUser);
 

// department  router


router.post('update-departement/:id', departmentController.updateDepartment);

router.delete('delete-departement/:id',departmentController.deleteDepartment);

module.exports = router ;