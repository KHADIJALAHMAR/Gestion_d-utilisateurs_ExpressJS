const {Department ,User} =require('../models');


const getAllUsers = (req,res) => {
    Department.findAll().then(departements => {
        res.render('depart',{departements});
    })
};