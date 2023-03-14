import mongoose from "mongoose";

import autoIncrement from "mongoose-auto-increment"

mongoose.set('strictQuery', true)

const userschema = mongoose.Schema({
    id: String,
    userName: String,
    userEmail : String,
    userPhone : String,
    userMessage : String
})

autoIncrement.initialize(mongoose.connection);
userschema.plugin(autoIncrement.plugin,"teamscylla_userMessage")

const user = mongoose.model("teamscylla_userMessage",userschema )

export default user;
