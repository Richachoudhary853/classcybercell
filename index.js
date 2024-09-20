const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.get('/multiply',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send(`The result is ${a*b}`);
});
app.get('/add',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send(`The result is ${a+b}`);
});
app.get('/substract',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send(`The result is ${a-b}`);
});
app.get('/divide',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send(`The result is ${a/b}`);
});


app.listen(3000, function() {
    console.log("Server Started at 3000");
});
