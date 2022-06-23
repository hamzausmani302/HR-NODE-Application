
const mongoose = require('mongoose');
const express = require("express");
const dotenv = require("dotenv")
const userRouter = require("./Routes/UserRouter.js");
const app = express()
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended :true}))


app.use('/',userRouter);



// mongoose.connect(`mongodb+srv://hamza302:${process.env.PASSWORD}@cluster0.zi0ab.mongodb.net/?retryWrites=true&w=majority` , { useNewUrlParser: true })
// .then(data=>{console.log("DB CONNECTED")})
// .catch(err=>{console.log("err")})
app.listen(3000 , ()=>{
    console.log("user connected")
    
})

main().then(data=> console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://hamza302:${process.env.PASSWORD}@cluster0.zi0ab.mongodb.net/mydb?retryWrites=true&w=majority`, { useNewUrlParser: true , useUnifiedTopology :true });
}
