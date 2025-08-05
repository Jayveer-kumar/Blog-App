require("dotenv").config();

const express =require("express"); 
const mongoose = require("mongoose");
const app=express();
const port = process.env.PORT || 8080;
const BlogRouter = require("./router/BlogRouter");
const UserRouter=  require("./router/userRouter");
const cors = require("cors");
const asyncWrap = require("./utills/asyncWrap");
const ExpressError= require("./utills/ExpressError");

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

main().then(()=>{
   console.log("Database connected successfully :  ");
}).catch(err =>{
    console.error("Database connection error:",err);
})

app.use(cors());
app.use(express.json());

app.get("/writora",(req,res)=>{
  res.status(200).json({
    success:true,
    message:"Welcome to Writora API",
  });
});

app.use("/writora/bg",BlogRouter);
app.use("/writora/ur",UserRouter); 

app.use((req, res, next) => {
  next(new ExpressError(`Can't find ${req.originalUrl} on this server`, 404));
});


app.use((err,req,res,next)=>{
  const {status=500,message="Something went wrong"} = err;
  if(process.env.NODE_ENV === "development"){
    console.error("Error:",err);
  }
  res.status(status).json({
    success:false,
    message,
  });
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);    
})
