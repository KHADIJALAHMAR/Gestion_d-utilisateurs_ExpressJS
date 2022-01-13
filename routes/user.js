const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');



// use routers
// // router.post('/adduser', userController.upload , userController.adduser)
router.get('/allUsers' , userController.get);
// router.get('/' , userController.getAll)

// department Url and Controller



// router.get('/allDepartment', departmentController.getAllDepartment)
// router.post('/addDepartment/:id', departmentController.addDepartment)


// user  router



// router.get('/:id', userController.getOneUser)

// router.put('/:id', productController.updateUser)

// router.delete('/:id', productController.deleteUser)



// router.get('/', userController.getUsers);
// router.get('/' ,(req, res) => res.send('douaa'))
// router.get("/all",(req,res) =>{
//     database.Department.findAll()
//     .then(Deparetements => res.send(Deparetements))
// })
// module.exports = router ;