
const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'application\json'});
    res.write(JSON.stringify({name:"md asif",email:'mdasifdav@gmail.com'}));
    res.end()
}).listen(4000);





// const express=require('express');
// const app=express();
// const reqFilter=(req,res,next)=>{
   
//     if(!req.query.age){
//         res.send('Please provide the age')
//     }
//     else{
//         next();
//     }
    
// }
// app.use(reqFilter)
// app.get('/',(req,res)=>{
//     res.send('welcome to home page')
// })
// app.get('/users',(req,res)=>{
//     res.send('welcome to users page')
// })
// app.listen(4000)