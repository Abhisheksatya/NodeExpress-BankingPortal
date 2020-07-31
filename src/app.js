const fs= require('fs');
const path = require('path');//confusion
const express= require('express');
const app=express();
var viewPath = path.join(__dirname, 'app/views');
app.set('views', viewPath);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public/')));
app.get('/',function(req,res){
    res.render(path.join(__dirname,'/views/','/index.ejs'), { title: 'Account Summary'});
})
app.listen(3000,function(){
    console.log('PS Project Running on port 3000!');
})