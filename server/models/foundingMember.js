const mongoose = require('mongoose')

const foundingMemberSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    email: {
        type:String,
        unique: true,
        required: true
    },
    contactNo:{
        type:String,
        unique:true,
        required: true
    },
    address:{
        type:String,
        unique: true,
        required: true
    },
    image: {
        type: String,
    }   
})

const FoundingMember = mongoose.model("FoundingMember",foundingMemberSchema)
module.exports = FoundingMember
