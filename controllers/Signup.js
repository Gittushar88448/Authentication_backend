const User = require('../models/userSchema');
const bcrypt = require('bcrypt')

exports.signUp = async(req , res) =>{

    
    try{
        // fetching the name , password, email, role from the request body
        const {name, password , email , role} = req.body;

        // find the existing user from database via email
         const existingUser = await User.findOne({email});
        
    }
    catch(error){

    }
}