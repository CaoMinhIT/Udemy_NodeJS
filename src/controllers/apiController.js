const userModel = require("../models/userModel")

// user API
const getUsersAPI = async (req,res) =>{
    let results = await userModel.find({});
    res.status(200).json(
        {
            errCode: 0,
            data: results,
        }
    );
}
const postCreateUser = async(req,res) => {
    let email = req.body.email; 
    let name = req.body.name;
    let city = req.body.city; 

    let newUser = await userModel.create({
        email: email,
        name: name,
        city: city,
    })

    res.status(200).json({
        errCode: 0,
        data: newUser,
    }) 
}
const putUpdateUser = async(req,res) => {
    let email = req.body.email; 
    let name = req.body.name;
    let city = req.body.city; 
    let userID = req.body.userId;

    let updateUser = await userModel.updateOne({_id: userID},{email: email, name: name, city: city})
    // console.log(userID);
    if(userID === undefined){
        res.status(500).send('Không tìm thấy người dùng');
        // console.log("Không nhận được dữ liệu");
    }else{
        res.status(200).json({
            errCode: 0,
            data: updateUser,
        }) 
    }

}
module.exports={
    getUsersAPI, postCreateUser, putUpdateUser

}