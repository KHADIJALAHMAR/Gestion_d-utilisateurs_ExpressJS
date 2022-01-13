module.exports = async ()=>{
    const Department = require('./models/department');
    const User =require ('./models/user');
// association
    Department.hasMany(User,{as : "User" , foreignkey: 'depId'});
    User.belongsTo(Department ,{as :"Department" , foreignkey: 'depId'});


    const error =(err) =>{
        console.log("errore :" ,err);
    }
    const user = await User.create({
         username : "khadija" ,
         password :"1234"
        }).catch(error);
    const  Departments = await  Department.create({
         name : "devloppment" ,
         descreption :"lor mom o " , 
         depId:user.id
        }).catch(error)
        
       const users =await User.findAll({
           where :{ username : "khadija"} ,
           include :[{models :Department , as :"Department" }],
           
         }).catch(error);
         console.log('hello',users)
    
}