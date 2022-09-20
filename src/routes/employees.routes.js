"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeesRoutes = void 0;
var express_1 = require("express");
var createEmployee_1 = require("../modules/Employees/useCases/createEmployee");
var editEmployee_1 = require("../modules/Employees/useCases/editEmployee");
var getEmployee_1 = require("../modules/Employees/useCases/getEmployee");
var listEmployees_1 = require("../modules/Employees/useCases/listEmployees");
var removeEmployee_1 = require("../modules/Employees/useCases/removeEmployee");
var employeesRoutes = express_1.Router();
exports.employeesRoutes = employeesRoutes;
employeesRoutes.get("/", function (request, response) {
    return listEmployees_1.listEmployeesController.handle(request, response);
});
employeesRoutes.get("/:id", function (request, response) {
    return getEmployee_1.getEmployeeController.handle(request, response);
});
employeesRoutes.post("/", function (request, response) {
    return createEmployee_1.createEmployeeController.handle(request, response);
});
employeesRoutes.put("/:id", function (request, response) {
    return editEmployee_1.editEmployeeController.handle(request, response);
});
employeesRoutes.delete("/:id", function (request, response) {
    return removeEmployee_1.removeEmployeeController.handle(request, response);
});
