const mongoose = require('mongoose');
const Student = require('../../model/Student');
async function connect (){
   // connection
    mongoose.connect("mongodb://nisha-demo:EGCJSBPG25TEOA9jkT1soMNyoILyCHOzSkD1X8nQtYeNBH8MkDD7OkiUZhTiT3iMWM1UGgkozJGLhvi45pVQJw==@nisha-demo.mongo.cosmos.azure.com:10255/test?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@nisha-demo@",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((response)=>{
      res.status(200).json({"response": "successful"});
      console.log("Connection Successful..."+response);
    }).catch((err)=>console.log("Error:"+err));
    // Create student object
    const std = new Student({
      id: "10",
      name: "demo account",
      email: "abc@gmail.com",
      password: "12345"
  });
  // Save student Object
   std.save().then((saved)=>{
    console.log(saved);
       res.status(200).json(saved);
       console.log("saved");
   }).catch((err)=>{
       console.log("Error in Block:"+err);
       res.status(200).json({"Response":"Saved successfully..."});
   });

  
}
export default connect;