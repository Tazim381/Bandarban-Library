const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    image:{
        type: String,
    }
})

const Image = mongoose.model("Image",imageSchema)
module.exports = Image
