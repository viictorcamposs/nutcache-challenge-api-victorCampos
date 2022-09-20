"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var AppError_1 = require("./errors/AppError");
var employees_routes_1 = require("./routes/employees.routes");
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use("/nutemployee", employees_routes_1.employeesRoutes);
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json(err.message);
    }
    return response.status(500).json({
        status: "Error",
        message: "Internal server error - " + err.message,
    });
});
app.listen(3030, function () { return console.log("Server is running on port 3030"); });
