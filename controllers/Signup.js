const User = require('../models/userSchema');
const bcrypt = require('bcrypt')

exports.signUp = async(req , res) =>{

    
    try{
        // fetching the name , password, email, role from the request body
        const {name, password , email , role} = req.body;

        // find the existing user from database via email
         const existingUser = await User.findOne({email});
        
         
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "user is already exist"
            })
        }
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(err){
            return res.status(500).json({
                success: false,
                message: "internal server error"
            })
        }

        
    }
    catch(error){

        res.status(500).json({
            success: false,
            message: "user is not get registered"
        })
    }

}
