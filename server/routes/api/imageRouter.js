const express = require('express')
const imageRouter = express.Router()
const Image = require('../../models/bookImage')

imageRouter.post('/',async(req,res)=>{
    try{
        const {category,imageURL} = req.body
        const imageObj = {
            category:category,
            image:imageURL
        }
        const image = new Image(imageObj)
        await image.save()
        res.status(201).json(image)
    }
    catch(error) {
        res.status(500).json("Internal Server Error")
    }
})

imageRouter.get("/",async(req,res)=>{
   try{
      const totalImage = await Image.find()
      res.status(200).json(totalImage)
   }
   catch(error) {
    res.status(500).json("Internal Server Error")
   }
})

module.exports = imageRouter