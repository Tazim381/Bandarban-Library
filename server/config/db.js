const mongoose = require('mongoose')
const uri = process.env.MONGODB_URL 

const connectDB =async()=>{
    try{
        await mongoose.connect(uri)
        console.log("Database Connected")
    }catch{
        console.log("Database Connection Failed")
    }
}

module.exports = connectDB
