const mongoose = require('mongoose');
const userDetailSchema = mongoose.Schema({

    userTypeId: {
        type: Number,
        required: true
    },

    userName: {
        type:String,
        required:true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model("userDetails", userDetailSchema);
