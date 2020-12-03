const mongoose=require("mongoose");


const connectDB=async()=> {
    try {
        let result= await mongoose.connect(process.env.DB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
           console.log("Dabase connected");
    } catch (error) {
        console.log(`Dabase not connected ${erro}`)
    }
    
}

module.exports=connectDB;
