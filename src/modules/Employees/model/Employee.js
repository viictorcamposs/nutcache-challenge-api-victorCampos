"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var uuid_1 = require("uuid");
var Employee = /** @class */ (function () {
    function Employee() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    return Employee;
}());
exports.Employee = Employee;
