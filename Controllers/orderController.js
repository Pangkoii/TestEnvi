import Tables from "../models/Tables.js";
import orderList from "../models/orderList.js";

export const createOrder = async (req, res, next) => {
    const newOrder = new orderList(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch(err) {
        next(err)
    }
}

export const updateOrder = async (req, res, next) => {
    try {
        const updatedOrder = await orderList.findByIdAndUpdate(
            req.params.orderId,
            { $set: req.body},
            { new:true, runValidators:true}
        )
        res.status(200).json(updatedOrder);
    } catch(err) {
        next(err)
    }
}

export const deleteOrder = async (req, res, next) => {
    try {
        const order = await orderList.findById(req.params.orderId);
        if (order) {
            const deleteOrder = order.itemName;
            await order.deleteOne({_id: req.params.orderId});
            res.status(200).json(`Deleted ${deleteOrder} Successfully`);
        } else {
            res.status(404).json("Unable to find Order");
        }
    } catch (err) {
        next(err)
    }
}

export const getOrder = async (req, res, next) => {
    try {
        const searchedOrder = await orderList.findById(req.params.orderId);
        res.status(200).json(searchedOrder);
    } catch(err) {
        next(err)
    }
}

export const getOrders = async (req, res, next) => {
    try {
        const Orders = await orderList.find();
        res.status(200).json(Orders);
    } catch (err) {
        next (err)
    }
}

export const getTableOrders = async (req, res, next) => {
    try {
      if (req.params.tableid) {
        const findTable = await orderList.findOne({ Table: req.params.tableid });
        if (findTable) {
          // If you found a table, return its orders
          res.status(200).json(findTable.Orders);
        } else {
          res.status(404).json("Table not found");
        }
      } else if (req.params.orderId) {
        const searchedOrder = await orderList.findById(req.params.orderId);
        if (searchedOrder) {
          // If you found an order, return it
          res.status(200).json(searchedOrder);
        } else {
          res.status(404).json("Order not found");
        }
      } else {
        res.status(400).json("Invalid request");
      }
    } catch (err) {
      next(err);
    }
  };