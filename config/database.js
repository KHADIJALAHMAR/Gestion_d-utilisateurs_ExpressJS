const Sequelize =require('sequelize');

module.exports = new Sequelize ('gestion_utilisateur_express','root','',{
    host: 'localhost',
    dialect:'mysql' ,
})