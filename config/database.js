const mongoose = require("mongoose")
require('dotenv').config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> {
        console.log("Connection Established successfully")
    })
    .catch( (error) => {
        console.error("Error Occurred!" + error)
        process.exit(1)
    }
    )
}

module.exports = dbConnect;