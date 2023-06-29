const express =require('express');
const app=express();//initalize express app
const port= 5000;

const userRouter =require('./router/userRouter');//import route from userrouter
const productRouter = require('./router/productRouter');
//Middleware

app.use(express.json());

app.use('/user', userRouter);
app.use('/product',productRouter);


//Routes
app.get('/',(req, res)=>{
    res.send('Response from express server');
});

app.get('/add',(req, res)=>{
    res.send('Response from add server');
});
app.get('/delete',(req, res)=>{
    res.send('Response from delete route');
});



// starting the express server
app.listen(port,()=>{
console.log('server started ');
});
