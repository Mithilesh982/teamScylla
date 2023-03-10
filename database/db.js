import mongoose from "mongoose"

mongoose.set('strictQuery', true)

const Connection= async(username,password)=>{
    
    const URL = `mongodb+srv://${username}:${password}@cluster0.v6pgkk4.mongodb.net/?retryWrites=true&w=majority`;
try {
    await mongoose.connect(URL , { useUnifiedTopology: true , useNewUrlParser: true  });
    console.log("database connected successfully")
} catch (error) {
    console.log("Error while connecting databases " , error)
}
}


export default Connection ;
