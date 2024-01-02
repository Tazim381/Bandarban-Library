const express = require('express')
const foundingMemberRouter = express.Router()
const FoundingMember = require('../../models/foundingMember')


foundingMemberRouter.post('/register',async(req,res)=>{
    const {name,email,contactNo,address} = req.body
    if(!name|| !email || !contactNo || !address) {
        return res.status(400).send("User Name, Email, Contact Number, Address all are required")
    }

    const foundingMemberObj = {
        name,
        email,
        contactNo,
        address
    }

    try{
        const foundingMember = new FoundingMember(foundingMemberObj)
        await foundingMember.save()
        res.status(201).json(foundingMember)

    } catch(error) {
        console.log("Admin Not created");
        res.status(401).json(error);
    }
})


foundingMemberRouter.get('/',async(req,res)=>{
    try{
        const allMember =await FoundingMember.find()
        res.status(200).json(allMember)
    } catch(error) {
        console.log("Can't find all member")
        res.status(401).json(error)
    }
})

module.exports = foundingMemberRouter
