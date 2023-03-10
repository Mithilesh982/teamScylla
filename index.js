import Connection from "./database/db.js"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import User from "./schema/user_schema.js"



const app= express();
const PORT = 3001

dotenv.config();

const username = process.env.USER;
const password = process.env.PASSWORD;

Connection(username,password);



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));



app.post("/create" , async (req,res)=>{
    const user = req.body ;
    const newUser = new User(user);
    console.log(newUser)
    
    try {
        await newUser.save();
        res.json(newUser)
    } catch (error) {
        res.json({message: error.message})
    }
    
})


app.listen(PORT , ()=>{
    console.log(`Server is runing on port ${PORT} `)
})
