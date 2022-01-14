const { User} =require('../models');




const getUsersByDepartementId = (req,res,departement) => {
    User.findAll({
        where: {
            'DepartementId' : departement.id
        }
    }).then(users => {
        res.render('users',{departement,users})
    })
}

// const updateUsersToPending = (req,res,callback) => {
//     (async () => {
//         await User.update({ DepartementId: 'e93f78e1-7213-4d46-be66-c4de8c216a5a' }, {
//             where: {
//                 DepartementId: req.params.id
//             }
//         });
//         callback()
//     })();
// };

const addUserToDepartement = (req,res) => {
    (async () => {
        await User.create({ user_name: req.body.username , user_email: req.body.email,  DepartementId: req.params.id });
        res.redirect('/departement/'+ req.params.id +'/users');
    })();
};

// const getUserToUpdate = (req,res) => {
//     User.findByPk(req.params.userId).then(user => {
//         res.render('update-user', {user, DepartementId: req.params.id});
//     })
// };

// const updateUser = (req,res) => {
//     (async () => {
//         await User.update({ user_name: req.body.username, user_email: req.body.email, user_age: req.body.age }, {
//             where: {
//               id: req.params.userId
//             }
//           });
//         res.redirect('/departement/' + req.params.id + '/users');
//     })();
// };

// const getUserToDelete = (req,res) => {
//     User.findByPk(req.params.userId).then(user => {
//         res.render('delete-user', {UserId: req.params.userId, DepartementId: req.params.id});
//     })
// };

// const deleteUser = (req,res) => {
//     (async () => {
//         await User.destroy({
//             where: {
//             id: req.params.userId
//             }
//         });
//         res.redirect('/departement/' + req.params.id + '/users');
//     })();
// };
module.exports ={
    addUserToDepartement,
    getUsersByDepartementId,
}





