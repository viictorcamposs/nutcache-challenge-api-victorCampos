"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEmployeesController = void 0;
var ListEmployeesController = /** @class */ (function () {
    function ListEmployeesController(listEmployeesUseCase) {
        this.listEmployeesUseCase = listEmployeesUseCase;
    }
    ListEmployeesController.prototype.handle = function (request, response) {
        var employees = this.listEmployeesUseCase.execute();
        return response.status(200).json(employees);
    };
    return ListEmployeesController;
}());
exports.ListEmployeesController = ListEmployeesController;
