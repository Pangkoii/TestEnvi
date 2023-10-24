import Employee from "../models/User.js"

export const updateEmployee = async (req, res, next) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            { new:true}
            )
        res.status(200).json(updatedEmployee);
    } catch (err){
            next(err)
        }
}
export const deleteEmployee = async (req, res, next) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (employee) {
            const deletedName = employee.name;
            await employee.deleteOne({_id: req.params.id});
            res.status(200).json(`Deleted ${deletedName} Succesfully`);
        } else {
            res.status(404).json("Unable to find Specified Employee");
        }
        } catch (err) {  
            next(err)
        }
}
export const getEmployee = async (req, res, next) => {
    try {
        const SearchedEmployee = await Employee.findById(req.params.id);
        res.status(200).json(SearchedEmployee);
    } catch(err) {
            next(err)
        }
}
export const getEmployees = async (req, res, next) => {
    try {
        const Employees = await Employee.find();
        res.status(200).json(Employees);
    } catch (err) {
            next(err)
        }
}