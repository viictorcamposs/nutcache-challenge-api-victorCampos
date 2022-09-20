"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditEmployeeUseCase = void 0;
var AppError_1 = require("../../../../errors/AppError");
var EditEmployeeUseCase = /** @class */ (function () {
    function EditEmployeeUseCase(employeesRepository) {
        this.employeesRepository = employeesRepository;
    }
    EditEmployeeUseCase.prototype.execute = function (id, data) {
        var employee = this.employeesRepository.findById(id);
        if (!employee) {
            throw new AppError_1.AppError("Error: Employee not found.");
        }
        var cpfAlreadyExists = this.employeesRepository.findByCpf(data.cpf);
        var emailAlreadyExists = this.employeesRepository.findByEmail(data.email);
        if (employee.cpf !== data.cpf && cpfAlreadyExists) {
            throw new AppError_1.AppError("Error: CPF already exists.", 401);
        }
        else if (employee.email !== data.email && emailAlreadyExists) {
            throw new AppError_1.AppError("Error: Email already exists.", 401);
        }
        var editedEmployee = this.employeesRepository.edit(id, data);
        return editedEmployee;
    };
    return EditEmployeeUseCase;
}());
exports.EditEmployeeUseCase = EditEmployeeUseCase;
