const express =require('express');
const path =require('path');
const mysql = require('mysql2');
const app = express();

// database
const database=require('./config/database')

database.authenticate()
.then(()=>console.log('Database connect'))
.catch(err => console.log('Error : '+err))




app.get('/',(req ,res) =>
res.send('hello'));



const PORT = 3000 || process.env.PORT ;
app.listen(PORT ,() => console.log(`app running on ${PORT} port`));