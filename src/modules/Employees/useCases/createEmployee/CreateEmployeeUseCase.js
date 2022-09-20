"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeUseCase = void 0;
var AppError_1 = require("../../../../errors/AppError");
var CreateEmployeeUseCase = /** @class */ (function () {
    function CreateEmployeeUseCase(employeesRepository) {
        this.employeesRepository = employeesRepository;
    }
    CreateEmployeeUseCase.prototype.execute = function (data) {
        var name = data.name, cpf = data.cpf, birth = data.birth, email = data.email, gender = data.gender, startDate = data.startDate;
        if (!name || !cpf || !birth || !email || !gender || !startDate) {
            throw new AppError_1.AppError("Error: All the fields must be filled.");
        }
        var cpfAlreadyExists = this.employeesRepository.findByCpf(cpf);
        var emailAlreadyExists = this.employeesRepository.findByEmail(email);
        if (cpfAlreadyExists) {
            throw new AppError_1.AppError("Error: CPF already exists.", 401);
        }
        else if (emailAlreadyExists) {
            throw new AppError_1.AppError("Error: Email already exists.", 401);
        }
        var newEmployee = this.employeesRepository.create(data);
        return newEmployee;
    };
    return CreateEmployeeUseCase;
}());
exports.CreateEmployeeUseCase = CreateEmployeeUseCase;
