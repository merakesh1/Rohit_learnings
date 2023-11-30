/* const EventEmitter=require('events');
const events=new EventEmitter();

events.on("hello",()=>{
    console.log("hello");
})

events.emit("hello") */

/* const shopClass=require('./CustumEmitter');
const math=require("maths")

const shopObj=new shopClass();

shopObj.on("order",(size,toppings)=>{
    console.log("order recieved with "+size+" "+toppings);
})

shopObj.order("medium","cheese");

shopObj.displayOrderNumber(); */
/* const fs=require("node:fs");
console.log("start")
setTimeout(()=>{
    console.log("timer-1")
    process.nextTick(()=>{
        console.log("nextTick-6")
    })
    Promise.reject().catch(()=>{
        console.log("promise-4")
    })
    setTimeout(()=>{
        console.log("Timer-6")
    },0)
},0)
process.nextTick(()=>{
    console.log("nextTick-1")
})
Promise.resolve().then(()=>{
    console.log("promise-2");
})
process.nextTick(()=>{
    console.log("nextTick-2")
    setTimeout(()=>{
        console.log("timer-2")
    },0)    
})
process.nextTick(()=>{
    console.log("nextTick-3")
    Promise.resolve().then(()=>{
        console.log("promise-3")
    })
    process.nextTick(()=>{
        console.log("nextTick-5")
    })
})
Promise.resolve().then(()=>{
    console.log("promise-1")
    process.nextTick(()=>{
        console.log("nextTick-4")
    })
})
fs.readFile("./textFile.txt",(err,data)=>{
   if(!err){
        console.log(data.toString());
    }
    setTimeout(()=>{
        console.log("timer-3")
    },0)
}) 
setImmediate(()=>{
    console.log("setImmediate")
})
console.log("end")

const stream=fs.createReadStream("./textFile.txt","utf-8",{highWaterMark:2});

stream.on("close",()=>{
    console.log("close");
})

stream.on("data",(data)=>{
    console.log(data);
    process.nextTick(()=>{
        console.log("nextTick-7");
    })
})

stream.on("end",()=>{
    console.log("----------end-------------");
})

stream.on("error",(err)=>{
    console.log(err);
})
 */

const express = require("express");
console.log(express)
const app = express();
// const router=require("./Abtract");

app.use(express.json());

// app.use("/user",router);

/* app.route("/example")
  .get((req, res) => {
    res.send('This is a GET request for /example');
  })
  .post((req, res) => {
    res.send('This is a POST request for /another');
  }); */
function middleware(req, res, next) {
    const { name, email } = req.body;
    if (String(name).length == 0 || String(email).length == 0) {
        return res.status(400).send("name or email is empty");
    }
    next();
}

function middleware1(req, res, next) {
    console.log("middleware1");
    next();
}

app.post("/adduser", middleware, middleware1, (req, res) => {
    try {
        console.log(req.body)
        return res.send("data is added to database");
    } catch (error) {
        return res.status(500).send(error);
    }
})
.get("/",(req, res) => {
    res.send("get request");
});

app.route("/users")
.get((req, res) => {
    res.send('This is a GET request for /users');
})
.post((req, res) => {
    res.send('This is a POST request for /users');
})

app.listen(2000, () => {
    console.log("server listening to requests on 2000 port number");
})