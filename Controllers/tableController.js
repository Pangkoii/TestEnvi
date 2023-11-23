import Table from "../models/Tables.js"
import restaurant from "../models/Restaurant.js"

export const createTable = async (req,res,next) => {
    const restaurantid = req.params.restaurantid;
    const newTable = new Table(req.body)
    try{
        const savedTable = await newTable.save();
        res.status(200).json(savedTable)
    } catch (err) {
        next(err);
    }
};

export const updateTable = async (req,res,next) => {
    try {
        const updatedTable = await Table.findByIdAndUpdate(
            req.params.tableid,
            {$set: req.body },
            {new: true}
        );
        res.status(200).json(updatedTable);
    } catch(err) {
        next(err);
    }
};

export const deleteTable = async (req, res, next) => {
    const table = await Table.findById(req.params.tableid);
    try { 
        if (table) {
        const deletedName = table.t_num;
        await table.deleteOne({_id: req.params.tableid});
        res.status(200).json(`Deleted ${deletedName} Successfully`);
        } else {
            res.status(404).json("Unable to find Specified table");
        }
    } catch (err) {
        next(err);
    }
};

export const getTable = async (req, res, next) => {
    try {
        const SearchedTable = await Table.findById(req.params.tableid);
        res.status(200).json(SearchedTable);
    } catch(err) {
        next(err)
    }
}

export const getTables = async (req, res, next) => {
    try {
        const tables = await Table.find();
        res.status(200).json(tables);
    } catch(err) {
        next(err)
    }
}