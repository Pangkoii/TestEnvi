import Menu from "../models/Menu.js";

export const createMenuItem = async (req, res, next) => {
    const newMenuItem = new Menu(req.body);
    try {
        const savedMenuItem = await newMenuItem.save();
        res.status(200).json(savedMenuItem);
    } catch(err) {
        next(err)
    }
}

export const updateMenuItem = async (req, res, next) => {
    try {
        const updatedMenuItem = await Menu.findByIdAndUpdate(
            req.params.itemID,
            { $set: req.body},
            { new:true, runValidators:true}
        )
        res.status(200).json(updatedMenuItem);
    } catch(err) {
        next(err)
    }
}

export const deleteMenuItem = async (req, res, next) => {
    try {
        const MenuItem = await Menu.findById(req.params.itemID);
        if (MenuItem) {
            const deletedMenuItem = Menu.itemName;
            await Menu.deleteOne({_id: req.params.itemID});
            res.status(200).json(`Deleted ${deletedMenuItem} Successfully`);
        } else {
            res.status(404).json("Unable to find MenuItem");
        }
    } catch (err) {
        next(err)
    }
}

export const getMenuItem = async (req, res, next) => {
    try {
        const searchedMenuItem = await Menu.findById(req.params.itemID);
        res.status(200).json(searchedMenuItem);
    } catch(err) {
        next(err)
    }
}

export const getMenuItems = async (req, res, next) => {
    try {
        const MenuItems = await Menu.find();
        res.status(200).json(MenuItems);
    } catch (err) {
        next (err)
    }
}