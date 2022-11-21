//console.log("hello world");
//console.log(_dirname);
//console.log(_filename);



// const http=require("http");

// const server=http.createServer((req,res)=>{
//     res.end("Hello World");
// })

// server.listen(8000,(error))





 //const fs = require("fs")
 //const path=require("path")

// fs.mkdir("file",function(err){
//     console.log(err,"dir is created")
// })




// fs.writeFile(path.join(__dirname,'temp.html'),"<h1>Hello Worls new data</h1>",function(err){
//     comsole.log(err,"File save successfully")
// })






// fs.readFile(path.join(__dirname,'temp.html'),function(err,data){
//     if(err){
//         throw err
//     }
//     console.log(data.toString());
// })



// fs.writeFileSync('test.text',"gghvhghvgh bjhgjhbjhb");
// console.log("hello sync");




// const fsPromise=require("fs/promises");
// fs.promise.readFile('temp.html').then(data=>console.log(data.toString())).catch
// (err=>console.log(err))



// const event=require('events');
// console.log(event)


// const EventEmitter=require('events');
// class MyEvent extends EventEmitter{}
// const myEvent =new myEvent();
// myEvent.on('hgsdgjh',function(...args){
//     console.log("i get called",args)
// })

// myEvent.emit('hgsdgjh',"hgduygjd")








//EXPRESS


const express=require('express');
const app=express();


let count=1;
const todos=[
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          },
        
]



app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send("Hello world")
})



app.get("/todos",(req,res)=>{
    res.status(200).json(todos);
})


app.post("/todos",(req,res)=>{
    CSSConditionRule.log(req.body)
    req.on('data',(chunk)=>{
    console.log(chunk.toString());
    
    })
    
    res.send('hello');
})


app.get("/todos/:id/:post_id",function(req,res){
  console.log(req.params,req.query);
  return res.send("hello")
})



app.listen(8000,(err)=>console.log("running on port 8000"))

