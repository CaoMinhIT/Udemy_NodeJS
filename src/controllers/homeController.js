const { request } = require('express');
const connection = require('../config/database')


const getHomepage = (req,res) =>{
    return res.render('home.ejs');
}

const getData = (req, res) =>{
    let users = [];
    
    connection.query(
        'SELECT * FROM Users u',
            function(err, results, fields) {
                users = results;
                console.log(">>>results", results); 

                // console.log (">> check users", users)
                res.send(JSON.stringify(users));
        }
    );
}
const getABC = (req,res) =>{

    res.render('sample.ejs');
} 

const postCreateUser = (req,res) => {
    let email = req.body.email; 
    let name = req.body.name;
    let city = req.body.city;
        // OR let {email, name, city} = req.body;

    console.log (">>email ", email,">>name ", name,">>city ", city);
    console.log(">>> req.body", req.body);
    

    connection.query(
        `INSERT INTO Users (email, name, city) 
        VALUES (?,?, ?)`,
        [email , name, city],
        function(err, results) {

            console.log(results);

            res.send("Create a new user successed");
        }
    );

}

module.exports = {
    getHomepage,
    getABC,
    getData,
    postCreateUser
}