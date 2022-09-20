"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEmployeeController = void 0;
var GetEmployeeController = /** @class */ (function () {
    function GetEmployeeController(getEmployeeUseCase) {
        this.getEmployeeUseCase = getEmployeeUseCase;
    }
    GetEmployeeController.prototype.handle = function (request, response) {
        var id = request.params.id;
        var employee = this.getEmployeeUseCase.execute(id);
        return response.status(200).json(employee);
    };
    return GetEmployeeController;
}());
exports.GetEmployeeController = GetEmployeeController;
