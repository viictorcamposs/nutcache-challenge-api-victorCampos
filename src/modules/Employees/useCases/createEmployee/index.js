"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployeeController = void 0;
var EmployeesRepository_1 = require("../../repositories/EmployeesRepository");
var CreateEmployeeController_1 = require("./CreateEmployeeController");
var CreateEmployeeUseCase_1 = require("./CreateEmployeeUseCase");
var employeesRepository = EmployeesRepository_1.EmployeesRepository.getInstance();
var createEmployeeUseCase = new CreateEmployeeUseCase_1.CreateEmployeeUseCase(employeesRepository);
var createEmployeeController = new CreateEmployeeController_1.CreateEmployeeController(createEmployeeUseCase);
exports.createEmployeeController = createEmployeeController;