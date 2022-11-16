const express = require("express");
const mongoose = require("mongoose");
const app =  express();
const Student = require('./model/Student');
const MostGainedCoins = require('./model/MostGainedCoins');
const TrustedCoins = require('./model/TrustedCoins');
const MostLossedCoins = require('./model/MostLossedCoins');
const PORT = 3000 || process.env.PORT;
var db;
// Start Server
app.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}`);
});

// connection
mongoose.connect("mongodb://nisha-demo:EGCJSBPG25TEOA9jkT1soMNyoILyCHOzSkD1X8nQtYeNBH8MkDD7OkiUZhTiT3iMWM1UGgkozJGLhvi45pVQJw==@nisha-demo.mongo.cosmos.azure.com:10255/coins?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@nisha-demo@",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((response)=>{
res.status(200).json({"response": "successful"});
console.log("Connection Successful..."+response);
}).catch((err)=>console.log("Error:"+err));
// '/' route
app.get("/",(req,res)=>{
  res.send("<p>Hello world...!!!</p>")
});

// Create
app.get("/create",(req,res)=>{
  const coin = new TrustedCoins({
    
    id: 5,
      name: 'XRP',
      percentage: 4.5,
      shortName: 'XRP',
      price: 41.04,
      imgSrc: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png',
      coinType: "HighVolumeCoins"
      
});
// Save student Object
coin.save().then((saved)=>{
  console.log(saved);
     res.status(200).json(saved);
     console.log("saved");
 }).catch((err)=>{
     console.log("Error in Block:"+err);
 });

});

// Fetch Most Gained Coins
app.get("/MostGainedCoinsFetch",(req,res)=>{

  
  MostGainedCoins.find().then((response)=>{
    res.status(200).send(response);
  }).catch(err=>{
    console.log("Error: "+err);
  })
  // console.log(data12);
});
// Fetch Trusted Coins
app.get("/TrustedCoinsFetch",(req,res)=>{

  
  // TrustedCoins.find().then((response)=>{
  //   res.status(200).send(response);
  // }).catch(err=>{
  //   console.log("Error: "+err);
  // })
  TrustedCoins.find({coinType: "TrustedCoins",},(err,docs)=>{
    res.send(docs);
  })
  // console.log(data12);
});
// Fetch Loss Coins
app.get("/MostLossedCoinsFetch",(req,res)=>{

  
  TrustedCoins.find({coinType: 'MostLossedCoins'},(err,docs)=>{
    res.send(docs);
  })
  // console.log(data12);
});
// Fetch Memecoins
app.get("/MemeCoinsFetch",(req,res)=>{

  
  TrustedCoins.find({coinType: 'MemeCoins'},(err,docs)=>{
    res.send(docs);
  })
  // console.log(data12);
});
// Fetch HoghVolumeCoins
app.get("/HighVolumeCoinsFetch",(req,res)=>{

  
  TrustedCoins.find({coinType: 'HighVolumeCoins'},(err,docs)=>{
    res.send(docs);
  })
  // console.log(data12);
});