const express =require('express');
const path =require('path');
const mysql = require('mysql2');
const app = express();
const userRoute = require('./routes/user');
// const userRoute = require('./routes/user');

// database
const database=require('./config/database');

app.use('/', userRoute);
// app.use('/' ,require('./routes/user'))

database.authenticate()
.then(()=>console.log('Database connect'))
.catch(err => console.log('Error : '+err))




// app.get('/',(req ,res) =>
// res.send('hello'));



const PORT = 3000 || process.env.PORT ;
app.listen(PORT ,() => console.log(`app running on ${PORT} port`));