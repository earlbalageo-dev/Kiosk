const mongoose = require('mongoose');


const DrinkSchema = new mongoose.Schema({
    name: String,
    type: String,
    currentPrice:Number,
    basePrice: Number,
    photo:{
        type:String,
        default:'no-photo.jpg'
    }
});

module.exports = mongoose.model('Drink', DrinkSchema);