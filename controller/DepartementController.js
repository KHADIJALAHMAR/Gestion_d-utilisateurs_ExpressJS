const {Department ,User} =require('../models');


const getDepartements = (req,res) => {
    Department.findAll().then(departements => {
        res.render('depart',{departements});
    })
};