const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Please enter a username']
    },
    role:{
        type:String,
        enum:['table', 'admin', 'fronthouse', 'backhouse'],
        default: 'table'
    },
    password:{
        type:String,
        required:[true, 'Enter a password']
    }
});


module.exports = mongoose.model('User', UserSchema);