const jwt = require('jsonwebtoken')
const User = require('../models/User.js')

//Middleware to protect routes

const protect = async (req, res) => {
    try{
        let token = req.headers.authorization

        if(token && token.startsWith("Bearer")){
            token = token.split('')[1] //Extract token
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decode.id).select('-password')
        }else{
            res.status(401).json({
                message:"Not authorized, no token",
                error: error.message
            });
        }
    } catch (error){
        res.status(401).json({
            message: "Token faild",
            error: error.message
        })
    }
};

module.exports = {protect}