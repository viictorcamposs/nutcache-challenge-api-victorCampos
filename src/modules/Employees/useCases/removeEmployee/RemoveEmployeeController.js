"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveEmployeeController = void 0;
var RemoveEmployeeController = /** @class */ (function () {
    function RemoveEmployeeController(removeEmployeeUseCase) {
        this.removeEmployeeUseCase = removeEmployeeUseCase;
    }
    RemoveEmployeeController.prototype.handle = function (request, response) {
        var id = request.params.id;
        this.removeEmployeeUseCase.execute(id);
        return response.status(200).json({
            success: "Employee successfully deleted.",
        });
    };
    return RemoveEmployeeController;
}());
exports.RemoveEmployeeController = RemoveEmployeeController;
