const getHomepage = (req,res) =>{
    res.send('Change your link to see new thing')
}

const getABC = (req,res) =>{
    res.render('sample.ejs');
} 
module.exports = {
    getHomepage,
    getABC
}