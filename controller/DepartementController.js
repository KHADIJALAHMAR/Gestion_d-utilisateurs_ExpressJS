const {Department ,User} =require('../models');



const createDepartement = (req,res) => {
    (async () => {
        await Department.create({name: req.body.name , descreption :req.body.descreption});
        
        res.redirect('/departments');
    })();
};


const getDepartements= (req,res) => {
    Department.findAll().then(departements => {
        res.render('All_department',{departements});
    })
};


const getUsersByDepartementId = (req,res) => {
    Department.findByPk(req.params.id).then(departement => {
        User.getUsersByDepartementId(req,res,departement);
    })
};
module.exports ={
    getUsersByDepartementId,
    getDepartements,
    createDepartement,
}
