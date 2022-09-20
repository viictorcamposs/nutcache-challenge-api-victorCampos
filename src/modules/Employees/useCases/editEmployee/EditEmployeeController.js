"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditEmployeeController = void 0;
var EditEmployeeController = /** @class */ (function () {
    function EditEmployeeController(editEmployeeUseCase) {
        this.editEmployeeUseCase = editEmployeeUseCase;
    }
    EditEmployeeController.prototype.handle = function (request, response) {
        var id = request.params.id;
        var data = request.body;
        var editedEmployee = this.editEmployeeUseCase.execute(id, data);
        return response.status(200).json(editedEmployee);
    };
    return EditEmployeeController;
}());
exports.EditEmployeeController = EditEmployeeController;
