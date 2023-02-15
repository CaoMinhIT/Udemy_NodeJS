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
    console.log(">>> req.body", req.body);
    res.send("Create a new user");
}

module.exports = {
    getHomepage,
    getABC,
    getData,
    postCreateUser
}