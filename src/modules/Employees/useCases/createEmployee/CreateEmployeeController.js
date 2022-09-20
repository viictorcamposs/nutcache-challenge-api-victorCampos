"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeController = void 0;
var CreateEmployeeController = /** @class */ (function () {
    function CreateEmployeeController(createEmployeeUseCase) {
        this.createEmployeeUseCase = createEmployeeUseCase;
    }
    CreateEmployeeController.prototype.handle = function (request, response) {
        var _a = request.body, name = _a.name, cpf = _a.cpf, birth = _a.birth, email = _a.email, gender = _a.gender, startDate = _a.startDate, team = _a.team;
        var newEmployee = this.createEmployeeUseCase.execute({
            name: name,
            cpf: cpf,
            birth: birth,
            email: email,
            gender: gender,
            startDate: startDate,
            team: team,
        });
        return response.status(201).json(newEmployee);
    };
    return CreateEmployeeController;
}());
exports.CreateEmployeeController = CreateEmployeeController;
