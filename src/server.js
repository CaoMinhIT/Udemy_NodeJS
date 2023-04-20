require('dotenv').config();
const hostname = process.env.HOST_NAME || 8888;
const path = require('path');
const connection = require ('./config/database')
const express = require('express') //import express
const app = express() // tạo express application 
const port = process.env.PORT || 8888;

// from file
const configViewEngine = require('./config/viewEngine.js');
const webRoutes = require('./routes/web')
const routerAPI = require('./routes/api')

// config request.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// to server
configViewEngine(app);

app.use('/', webRoutes);
app.use('/v1/api', routerAPI);


(async()=>{
    try {
        await connection();
        app.listen(port,hostname, () => {
            console.log(`Example app listening on port http://${hostname}:${port}/`)
        })
    } catch (err) {
        
    }
})()

