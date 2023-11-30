/* console.log("start");

Promise.resolve().then(()=>{
    console.log("promise");
})

process.nextTick(() => {
    console.log("nextTick");
});

console.log("end");
 */


/* setTimeout(() => {
    Promise.resolve().then(()=>{
        process.nextTick(()=>{
            console.log("nextTick in promise");
        })
    })
    foo()
}, 0);

function foo() {
    process.nextTick(()=>{
        console.log("nextTick");
    })
} */

/* 
Promise.resolve().then(()=>{
    process.nextTick(()=>{
        console.log("nextTick in promise");
    })
})

setTimeout(()=>{
    process.nextTick(()=>{
        console.log("nextTick in setTimeout");
    })
},0)

process.nextTick(()=>{
    console.log("nextTick in process");
}) */
/* 
console.log("start");

setTimeout(()=>{
    console.log("timer-1");
    Promise.resolve().then(()=>{
        console.log("promise-4")
    })
},0)
setTimeout(()=>{
    console.log("timer-2");
},0)
setTimeout(()=>{
    console.log("timer-3");
},0)
Promise.resolve().then(()=>console.log("promise-1"))
Promise.resolve().then(()=>{
    console.log("promise-2")
    process.nextTick(()=>{
        console.log("nextTick-5")
    })
})
Promise.resolve().then(()=>console.log("promise-3"))
console.log("end");
process.nextTick(()=>console.log("nextTick-1"))
process.nextTick(()=>{
    console.log("nextTick-2")
    process.nextTick(()=>{
        console.log("nextTick-3")
    })
})
process.nextTick(()=>console.log("nextTick-4")) */


/* setTimeout(()=>{
    console.log("timer-1");
},500)
setTimeout(()=>{
    console.log("timer-2");
},1000)
setTimeout(()=>{
    console.log("timer-3");
},0) */

/* Promise.resolve().then(() => {
    console.log(`this is Promise.resolve 1`);
});

Promise.resolve().then(() => {
    console.log(`this is Promise.resolve 2`);
    process.nextTick(() => {
        console.log(`this is Promise.resolve in process.nextTick`);
    });
});

Promise.resolve().then(() => {
    console.log(`this is Promise.resolve3`);
});

process.nextTick(() => {
    console.log(`this is process.nextTick 1`);
});

process.nextTick(() => {
    console.log(`this is process.nextTick 2`);
    process.nextTick(() => {
        console.log(`this is process.nextTick in process.nextTick`);
    });
});

process.nextTick(() => {
    console.log(`this is process.nextTick3`);
}); */

/* process.nextTick(() => {
    console.log(`this is process.nextTick 1`);
});

Promise.resolve().then(()=>{
    console.log(`this is Promise.resolve 1`);
    process.nextTick(() => {
        console.log(`this is process.nextTick 2`);
        Promise.resolve().then(()=>{
            console.log("this is a Promise.resolve in process.nextTick")
            setTimeout(()=>{
                console.log("this is a setTimeout in process.nextTick")
                process.nextTick(()=>{
                    console.log("this is a process.nextTick in process.nextTick in setTimeout")
                })
            },500)
            setTimeout(()=>{
                console.log("end");
            },0)
            process.nextTick(()=>console.log("this is mainly to check functionality"))
        });
        process.nextTick(() => {
            console.log(`this is process.nextTick in process.nextTick`);
        });
    });
}) */
// console.log("---------------------");

const fs = require("node:fs")

/* fs.readFile("./textFile.txt", "utf-8", () => {
    console.log("this is fs.readFile 1");
    fs.readFile("./textFile.txt", "utf-8", () => {
        console.log("this is fs.readFile 2");
    })
})

fs.readFile("./textFile.txt", "utf-8", () => {
    console.log("this is fs.readFile 3");
    process.nextTick(() => {
        console.log("this is process.nextTick");
    })
})

fs.readFile("./textFile.txt", "utf-8", () => {
    console.log("this is fs.readFile 4");
}) */

const val=fs.createReadStream("./textFile.txt","utf-8");
val.on("data",(data)=>{
    console.log(data);
})

val.on("close",()=>{
    console.log("end");
})

val.close();

process.nextTick(()=>{
    console.log("this is process.nextTick");
})

setTimeout(()=>{
    console.log("this is setTimeout");
},0)


