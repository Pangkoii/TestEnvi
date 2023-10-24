import Restaurant from "../models/Restaurant.js"

export const createRestaurant = async (req, res, next) => {
    const newRestaurant = new Restaurant(req.body);

        try{
            const savedRestaurant = await newRestaurant.save();
            res.status(200).json(savedRestaurant);
        } catch (err) {
            next(err)
        }
}
export const updateRestaurant = async (req, res, next) => {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            { new:true}
            )
        res.status(200).json(updatedRestaurant);
    } catch (err){
            next(err)
        }
}
export const deleteRestaurant = async (req, res, next) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (restaurant) {
            const deletedName = restaurant.name;
            await restaurant.deleteOne({_id: req.params.id});
            res.status(200).json(`Deleted ${deletedName} Succesfully`);
        } else {
            res.status(404).json("Unable to find Specified Restaurant");
        }
        } catch (err) {  
            next(err)
        }
}
export const getRestaurant = async (req, res, next) => {
    try {
        const SearchedRestaurant = await Restaurant.findById(req.params.id);
        res.status(200).json(SearchedRestaurant);
    } catch(err) {
            next(err)
        }
}
export const getRestaurants = async (req, res, next) => {
    try {
        const Restaurants = await Restaurant.find();
        res.status(200).json(Restaurants);
    } catch (err) {
            next(err)
        }
}