const fs=require('fs');

console.log("start");
const fileContent=fs.readFileSync('demo.txt',"utf-8");
console.log(fileContent);
console.log("middle");
fs.readFile('demo1.txt','utf-8',(err,data)=>{
    if(err) console.log(err);
    else console.log(data);
});
fs.writeFileSync('demo.txt','hello');
const contents=fs.readFileSync('demo.txt');
console.log(contents.toString());
console.log("end");
