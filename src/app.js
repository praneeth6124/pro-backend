import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//required configurations:
//accepting json files to some extent so that the server do not crash.
app.use(express.json({limit:"20kb"}))
//data from urls 
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import userRouter from './routes/user.routes.js'


// routes declaration
app.use('/api/v1/users',userRouter)

// https://localhost:8000/api/v1/users/register

export { app } 