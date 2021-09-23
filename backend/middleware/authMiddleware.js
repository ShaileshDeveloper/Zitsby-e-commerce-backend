const jwt = require('jsonwebtoken')
const {userModel} = require('../models/userModel.js')

const protect = async (req, res, next) =>{
    let token;
    if(req.headers.authorization){
         try {
             token =req.headers.authorization
             console.log(token , "token")
             const decoded = jwt.verify(token ,process.env.JWT_SECRET)
             req.user = await userModel.findById(decoded.id)
             console.log(req.user)
             next()
         } catch (error) {
             console.error(error)
             res.status(401).json({message: "error" ,error:error})
             
         }
    }

    if(!token){
        res.status(401).json({error : "NOT FOUND TOkEN FAILED"})
    }

}

module.exports ={protect}