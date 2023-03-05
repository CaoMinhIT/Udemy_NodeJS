const { request } = require('express');
const connection = require('../config/database')
const { getAllUsers, getUserByID, 
        updateUserById, deleteUserById} = require('../services/CRUDService')


const getHomepage = async (req,res) =>{
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results}); // x <- y
}

const getData = async(req, res) =>{
    let users = [];
        // Select with async await
    const [results, fields] = await connection.query('select * from Users u');
    console.log(">>> check add data: ",results );
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

    // Insert with async await
    let [results, fields]  = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?,?, ?)`, [email , name, city],
    );
    console.log(">>> check add data: ",results );
    res.send("Create a new user successed");

}
const getCreatePage = (req,res) =>{
    res.render('create.ejs');
}

const getUpdatePage = async (req,res) =>{
    const userID = req.params.id;
    let user = await getUserByID(userID);
    res.render('edit.ejs', {userEdit : user});
}
const postUpdateUser = async(req,res) => {

    let email = req.body.email; 
    let name = req.body.name;
    let city = req.body.city; 
    let userID = req.body.userId;

    await updateUserById(email, name, city, userID);

    // res.send("Update a new user successed");
    res.redirect('/'); // go home
}

const postDeleteUser = async (req,res) => {
    const userID = req.params.id;
    let user = await getUserByID(userID);
    res.render('delete.ejs', {userEdit : user});
    console.log (">>> id: ", userID)
}

const postRemove = async (req,res) => {
    let userID = req.body.userId;
    let email = req.body.email;

    await deleteUserById(userID);
    console.log (">>> id: ", userID , email)
    res.redirect("/");
}


module.exports = {
    getHomepage, getABC, getData,
    postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser, postDeleteUser, postRemove
}