require("dotenv").config();
const express = require('express')
const app=  express()
const PORT = process.env.PORT
const connectDB = require('./config/db')
const adminRouter = require('./routes/api/adminRouter')
const cors = require('cors');
const bookRouter = require("./routes/api/bookRouter");
const foundingMemberRouter = require('./routes/api/foundingMemberRouter')
const imageRouter = require('./routes/api/imageRouter')


app.listen(PORT,(req,res)=>{
    console.log(`App is running port ${PORT}`)
})

app.use(
    cors({
      origin: ["http://localhost:5173"],
      credentials: true,
    })
  );

connectDB()
app.use(express.json())

app.use("/api/book/image",imageRouter)
app.use("/api/admin", adminRouter);
app.use("/api/book",bookRouter)
app.use("/api/foundingMember",foundingMemberRouter)

