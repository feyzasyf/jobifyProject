import express from "express";
const app= express();

import dotenv from "dotenv"
dotenv.config();
import "express-async-errors";

//db and authenticate user
import connection from "./database/connect.js"; 

//routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js"

//middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

 const port= process.env.PORT;
app.use(express.json());





app.get("/", (req,res)=>{
    
    res.send("Welcome");
})

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)





const start= async()=>{
    try {
        await connection(process.env.MONGO_URL);
        app.listen(port, ()=>{console.log(`server is listening on ${port}...`)})

    } catch (error){
        console.log(error);
    } 
        
    
}
start();