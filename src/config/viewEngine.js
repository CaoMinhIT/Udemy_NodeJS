const path = require("path")
const express = require('express')

const configViewEngine = (app)=>{
    //config template engine
    // Find all the file in views have .ejs
    app.set('views',path.join('./src','views')); // place to get you file
    app.set('view engine', 'ejs') // choose default frame (ejs)

    // config stactic file
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;