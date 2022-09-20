"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEmployeeUseCase = void 0;
var AppError_1 = require("../../../../errors/AppError");
var GetEmployeeUseCase = /** @class */ (function () {
    function GetEmployeeUseCase(employeesRepository) {
        this.employeesRepository = employeesRepository;
    }
    GetEmployeeUseCase.prototype.execute = function (id) {
        var employee = this.employeesRepository.findById(id);
        if (!employee) {
            throw new AppError_1.AppError("Error: Employee not found.");
        }
        return employee;
    };
    return GetEmployeeUseCase;
}());
exports.GetEmployeeUseCase = GetEmployeeUseCase;
