const {Department ,User} =require('../models');


const getAllUsers = (req,res) => {
    Department.findAll().then(departements => {
        res.render('depart',{departements});
    })
};

const getUsersByDepartementId = (req,res) => {
    Department.findByPk(req.params.id).then(departement => {
        User.getUsersByDepartementId(req,res,departement);
    })
};

