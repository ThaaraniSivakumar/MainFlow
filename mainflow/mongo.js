const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://sivathaarani2004:f7hWMNLP1WG3pnQF@taskmain.s6dti.mongodb.net/?retryWrites=true&w=majority&appName=taskmain")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
  });


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
