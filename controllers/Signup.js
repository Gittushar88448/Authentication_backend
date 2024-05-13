const User = require('../models/userSchema');
const bcrypt = require('bcrypt')

exports.signUp = async(req , res) =>{

    
    try{
        // fetching the name , password, email, role from the request body

        const {name, password , email , role} = req.body;
        
    }
    catch(error){

    }
}