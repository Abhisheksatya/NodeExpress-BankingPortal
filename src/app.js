const fs= require('fs');
const path = require('path');//confusion
const express= require('express');
const app=express();
const accountRoutes = require('./routes/accounts');
const servicesRoutes =require('./routes/accounts'); 
const { accounts, users, writeJSON } = require('./data.js');
app.set('views',path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public/')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts: accounts}));


app.get('/profile', (req, res) =>  res.render('profile', { user: users[0] }));
app.listen(3000,function(){
    console.log('PS Project Running on port 3000!');
})