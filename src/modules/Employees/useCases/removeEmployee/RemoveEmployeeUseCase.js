"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveEmployeeUseCase = void 0;
var AppError_1 = require("../../../../errors/AppError");
var RemoveEmployeeUseCase = /** @class */ (function () {
    function RemoveEmployeeUseCase(employeesRepository) {
        this.employeesRepository = employeesRepository;
    }
    RemoveEmployeeUseCase.prototype.execute = function (id) {
        var employee = this.employeesRepository.findById(id);
        if (!employee) {
            throw new AppError_1.AppError("Error: Employee not found.");
        }
        this.employeesRepository.remove(id);
    };
    return RemoveEmployeeUseCase;
}());
exports.RemoveEmployeeUseCase = RemoveEmployeeUseCase;
