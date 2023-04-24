const  mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    email: {
        type : String,
        require : true, // Bắt buộc
    },
    name: String,
    address: String,
    phone: {
        type: Number,
        min: 8,
        max: 11,
    },
    image: String,
    description: String,
}, { timestamps: true });

const customer = mongoose.model('Customer', customerSchema);

module.exports = customer;