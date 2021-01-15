const mongoose = require('mongoose');


const FoodSchema = new mongoose.Schema({
    name: String,
    description: String,
    type:String,
    price:Number,
    photo:{
        type:String,
        default:'no-photo.jpg'
    },
    dietRestrictions:{
        peanut: {
            type: Boolean,
            default: false
        },
        glutenFree: {
            type: Boolean,
            default: false
        },
        vegetarian: {
            type: Boolean,
            default: false
        },
        vegan: {
            type: Boolean,
            default: false
        },
        lowFat: {
            type: Boolean,
            default: false
        }
    }


});

module.exports = mongoose.model('Food', FoodSchema);