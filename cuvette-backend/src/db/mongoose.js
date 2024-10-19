const mongoose = require("mongoose");
const mong=mongoose.connect(process.env.MONGO, {
  serverSelectionTimeoutMS: 60000,
  autoCreate: false,
});
if(mong){
    console.log("connected");
    
}