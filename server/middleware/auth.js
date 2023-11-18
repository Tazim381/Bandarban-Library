const jwt = require("jsonwebtoken");

const authenticateToken =(req,res,next) =>{
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1]
    if(!token) {
        res.status(401).json({message:"Unauthorize user (token e somossa ase)"})
    } else {
         const decoded = jwt.verify(token, process.env.JWT_SECRET,(error,user)=>{
            if(error) {
                res.status(401).json({message:"unauthorize user(token verify hoini)"})
            } else {
                req.user = user
                next()
            }
        });
    }
}

module.exports = authenticateToken