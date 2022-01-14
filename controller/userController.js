const { User} =require('../models');




const getUsersByDepartementId = (req,res) => {
    User.findAll({
        where: {
            'DepartmentId' : req.params.id
        }
    }).then(users => {
        res.render('users',{users,id_dep:req.params.id})
    })
}

const addUserToDepartement = (req,res) => {
    (async () => {
        await User.create({ username: req.body.username , email: req.body.email, password: req.body.password, DepartmentId: req.params.id });
        res.redirect('/department/'+ req.params.id +'/users');
    })();
};

const getUserToUpdate = (req,res) => {
    User.findByPk(req.params.id_user).then(user => {
        res.render('update_user', {user, DepartmentId: req.params.id});
    })
};

const updateUser = (req,res) => {
    (async () => {
        await User.update({ username: req.body.username, user_email: req.body.email }, {
            where: {
              id: req.params.id_user
            }
          });
        res.redirect('/department/' + req.params.id + '/users');
    })();
};

const deleteUser = (req,res) => {
    (async () => {
        await User.destroy({
            where: {
            id: req.params.id_user
            }
        });
        res.redirect('/departement/' + req.params.id + '/users');

    })();
};
module.exports ={
    addUserToDepartement,
    getUsersByDepartementId,
    deleteUser ,
    updateUser,
    getUserToUpdate,
}





