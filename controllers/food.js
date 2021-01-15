const Food = require('../models/Food');


//@desc     Get all food
//@route    GET  /api/drink
//@access   Public

exports.getAllFood = async (req,res) =>{
    const data = await Food.find({})
    res.json(data);
}

//@desc     Add a single food
//@route    POST  /api/drink
//@access   PRIVATE

exports.addFood = async (req,res) =>{
    const{name, description, type, price, photo, dietRestrictions} = req.body;
    //Add food to menu

    const food = await Food.create({
        name,
        description,
        type,
        price,
        photo,
        dietRestrictions
    });
    res.status(201).json({
        success: true,
        data: food
    })
};

