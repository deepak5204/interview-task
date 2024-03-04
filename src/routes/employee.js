const express = require('express');
const {
    createEmployee,
    getAllEmployees,
    updateEmployee,
    deleteEmployee,
    searchEmployeeById,
    getEmployeesByDepartment,
    sortEmployeesBySalary
} = require('../controllers/employee');

const router = express.Router();

router.route('/').post(createEmployee);

router.get('/', getAllEmployees);

router.patch('/:id', updateEmployee);

router.delete('/:id', deleteEmployee);

router.get('/search/:employee_id', searchEmployeeById);

router.get('/filter/:department', getEmployeesByDepartment);

router.get('/sort/salary', sortEmployeesBySalary);


module.exports = router;