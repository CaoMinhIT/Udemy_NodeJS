const { request } = require('express');
const connection = require('../config/database')


const getHomepage = (req,res) =>{
    return res.render('home.ejs');
}

const getData = async(req, res) =>{
    let users = [];
    // res.render("data.ejs");
    // connection.query(
    //     'SELECT * FROM Users u',
    //         function(err, results, fields) {
    //             users = results;
    //             console.log(">>>results", results); 
    //             // console.log (">> check users", users)
    //             res.send(JSON.stringify(users));
    //     }
    // );
        // Select with async await
    const [results, fields] = await connection.query('select * from Users u');
    console.log(">>> result: ", results);

    users = results
    res.send(JSON.stringify(users));
}
const getABC = (req,res) =>{
    res.render('sample.ejs');
} 

const postCreateUser = async(req,res) => {
    let email = req.body.email; 
    let name = req.body.name;
    let city = req.body.city; 
    // Normal insert
    // connection.query(
    //     `INSERT INTO Users (email, name, city) 
    //     VALUES (?,?, ?)`,
    //     [email , name, city],
    //     function(err, results) {
    //         console.log(results);
    //         res.send("Create a new user successed");
    //     }
    // );
    // Insert with async await
    let [results, fields]  = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?,?, ?)`, [email , name, city],
    );
    console.log(">>> check add data: ",results );


}
const getCreatePage = (req,res) =>{
    res.render('create.ejs');
}

module.exports = {
    getHomepage,
    getABC,
    getData,
    postCreateUser,
    getCreatePage
}