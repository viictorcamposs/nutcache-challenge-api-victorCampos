"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesRepository = void 0;
var Employee_1 = require("../model/Employee");
var EmployeesRepository = /** @class */ (function () {
    function EmployeesRepository() {
        this.employees = [];
    }
    EmployeesRepository.getInstance = function () {
        if (!EmployeesRepository.INSTANCE) {
            EmployeesRepository.INSTANCE = new EmployeesRepository();
        }
        return EmployeesRepository.INSTANCE;
    };
    EmployeesRepository.prototype.list = function () {
        return this.employees;
    };
    EmployeesRepository.prototype.findById = function (id) {
        return this.employees.find(function (employee) { return employee.id === id; });
    };
    EmployeesRepository.prototype.findByCpf = function (cpf) {
        var employee = this.employees.find(function (employee) { return employee.cpf === cpf; });
        return employee;
    };
    EmployeesRepository.prototype.findByEmail = function (email) {
        var employee = this.employees.find(function (employee) { return employee.email === email; });
        return employee;
    };
    EmployeesRepository.prototype.create = function (employee) {
        var newEmployee = new Employee_1.Employee();
        Object.assign(newEmployee, __assign(__assign({}, employee), { created_at: new Date() }));
        this.employees.push(newEmployee);
        return newEmployee;
    };
    EmployeesRepository.prototype.edit = function (id, updatedData) {
        var employee = this.findById(id);
        var editedEmployee = __assign(__assign({}, employee), updatedData);
        this.employees = this.employees.filter(function (employee) { return employee.id !== id; });
        this.employees.push(editedEmployee);
        return editedEmployee;
    };
    EmployeesRepository.prototype.remove = function (id) {
        this.employees = this.employees.filter(function (employee) { return employee.id !== id; });
    };
    return EmployeesRepository;
}());
exports.EmployeesRepository = EmployeesRepository;
