const express=require("express");
const app=express();
const port=80;
const hbs = require('hbs')


const fs=require("fs");
const path=require("path")
const partialsPath = path.join(__dirname, '/partials')


const bodyparser=require("body-parser");

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'))
hbs.registerPartials(partialsPath)


app.get('/',(req,res)=>{
    res.status(200).render('portfolio.hbs')
})

app.listen(port,()=>{
    console.log(`application running on port ${port}`)
})