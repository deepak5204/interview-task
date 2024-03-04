const Employee = require("../modals/Employee");

module.exports.createEmployee = async(req, res) => {
    const createdQuestion = await Employee.create(req.body);

    res.status(201).json({
        status: true,
        createdQuestion
    })
}


module.exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({
            status: true,
            employees
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
}


module.exports.updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            status: true,
            updatedEmployee
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
}

module.exports.deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: true,
            message: 'deleted successfully'
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
}


module.exports.searchEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findOne({ employee_id: req.params.employee_id });
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({
            status: true,
            employee
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
}

module.exports.getEmployeesByDepartment = async (req, res) => {
    try {
        const department = req.params.department;
        const employees = await Employee.find({ department: department });
        res.status(200).json({
            status: true,
            employees
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
}


module.exports.sortEmployeesBySalary = async (req, res) => {
    try {
        const employees = await Employee.find().sort({ salary: 1 }); // 1 for ascending order, -1 for descending
        res.status(200).json({
            status: true,
            employees
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
}



