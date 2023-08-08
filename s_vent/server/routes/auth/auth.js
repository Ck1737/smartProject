const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

module.exports = (req,res,next) => {

    const token =req.cookies.token;
    if(!token){
        return res.status(401).send("No token provided");
    }
    try{
        const decoded = jwt.verify(token, proces.env.SECRET);
        req.userId = decoded;
        next(); 
    }catch(error){
        res.clearCookie("token");
        return res.status(400).send(error.message);
    }
};