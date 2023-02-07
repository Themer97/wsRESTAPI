const express = require("express");
const app = express();
const path = require("path");

require('dotenv').config()

// app.use(process.env.URL,(req,res)=> {
//     res.send("DONE");
// }); 


//middleware
const workingtime = require("./middleware/middleware");
app.use(workingtime);

//set the wiew engine for the app

app.use(express.static(path.join(__dirname, './public')));
// app.get('/', function (req, res, next) {
//   res.render('home.ejs');
// })




const port = process.env.PORT;

app.listen(port,()=>console.log("DONE"));