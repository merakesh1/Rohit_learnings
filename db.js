//This is function related to async js and handling
/* fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
}) */

/* async function datafetch() {
    try {
        console.log("start")
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    finally{
        console.log("end")
    }
} */

// datafetch();



// <-------------------------------------------------------------------------------------------------->



//handling database connection using with and without mongoose

/* const mongoose = require('mongoose');
const register=require("./models/Demo1")
// console.log(mongoose)

mongoose.connect("mongodb://127.0.0.1:27017/Learning")
    .then(() => {
        console.log("conn success")
    })
    .catch(err => {
        console.log(err)
    })

register.create({
    name1: "Rakesh",
    email1: "rakesh@1234",
    password: "rakesh123"
})
.then((data) => {
    console.log(data)
})
.catch(err => {
    console.log(err)
}) */

/* const mongodb = require("mongodb").MongoClient
console.log(mongodb)

function mywish_connection(operation) {
    mongodb.connect("mongodb://127.0.0.1:27017")
        .then((conn) => {
            console.log("conn success")
            const db = conn.db("DemoProject")
            const collection = db.collection("feeds")
            if (operation == "insert") {
                collection.insertOne({ name: "Rakesh" })
                    .then(data => {
                        console.log(data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            else if (operation == "delete") {
                collection.deleteMany({ name: "Rakesh" })
                    .then(data => {
                        console.log(data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            else if (operation == "update") {
                collection.updateOne({ name: "Rakesh" }, { $set: { name: "Rakesh Kumar" } })
                    .then(data => {
                        console.log(data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            else if (operation == "find") {
                collection.find({ name: "Rakesh" }).toArray()
                    .then(data => {
                        console.log(data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            else{
                console.log("invalid operation")
            }

        })
        .catch(err => {
            console.log(err)
        })
}

mywish_connection("insert") */



