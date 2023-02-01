require('dotenv').config();
const hostname = process.env.HOST_NAME || 8888;
const path = require('path');

const express = require('express') //import express
const app = express() // tạo express application
const port = process.env.PORT || 8888;

// from file
const configViewEngine = require('./config/viewEngine.js');
const webRoutes = require('./routes/web')


// to server
configViewEngine(app);
app.use('/',webRoutes);

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port,hostname, () => {
    console.log(`Example app listening on port http://localhost:3000`)
})