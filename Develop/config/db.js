const mongoose = require("mongoose");

const connectDb = async() => {
    try { 
        const konnect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
    
        });
        console.log(`mongo db connected: ${konnect.connection.host}`)
        
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
};

module.exports = connectDb