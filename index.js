const express =require('express');
const path =require('path');
const app = express();
const userRoute = require('./routes/user');



// database connection
const database=require('./config/database');
// getting the Models
const {Department ,User} =require('./models/index');
// getting controllers
const Departements = require('./controller/DepartementController');
const Users = require('./controller/UserController');
// specifying the views path and the template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const userRoute = require('./routes/user');

app.use('/', userRoute);
// app.use('/' ,require('./routes/user'))

database.authenticate()
.then(()=>console.log('Database connect'))
.catch(err => console.log('Error : '+err))




// app.get('/',(req ,res) =>
// res.send('hello'));



const PORT = 3000 || process.env.PORT ;
app.listen(PORT ,() => console.log(`app running on ${PORT} port`));