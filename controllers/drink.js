const Drink = require('../models/Drink');


//@desc     Get all drinks
//@route    GET  /api/drink
//@access   Public

exports.getAllDrink = async (req,res) =>{
    const data = await Drink.find({})
    res.json(data);
}

//@desc     Add a single food
//@route    POST  /api/drink
//@access   PRIVATE

exports.addDrink = async (req,res) =>{
    const{name, type, currentPrice, basePrice, photo} = req.body;
    //Add Drink to menu
        const drink = await Drink.create({
            name,
            type,
            currentPrice,
            basePrice,
            photo
        });
   
    
    res.status(201).json({
        success: true,
        data: drink
    })
};

