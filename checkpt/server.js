const express=require("express");
require('dotenv').config();
const dbconnect=require("./config/connectDB");
const app=express();

//Connect DB
dbconnect();

//Create Route
//Middleware routing body parse
app.use(express.json());
app.use("/api/contact",require("./routes/contacts"))


PORT=process.env.PORT
app.listen(PORT,(err)=>
 err? console.error(err):console.log( "server is running")
);
