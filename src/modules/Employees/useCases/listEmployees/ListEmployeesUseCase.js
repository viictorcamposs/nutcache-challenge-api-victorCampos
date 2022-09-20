"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEmployeesUseCase = void 0;
var ListEmployeesUseCase = /** @class */ (function () {
    function ListEmployeesUseCase(employeesRepository) {
        this.employeesRepository = employeesRepository;
    }
    ListEmployeesUseCase.prototype.execute = function () {
        return this.employeesRepository.list();
    };
    return ListEmployeesUseCase;
}());
exports.ListEmployeesUseCase = ListEmployeesUseCase;
