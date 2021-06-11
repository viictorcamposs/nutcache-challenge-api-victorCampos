import { EmployeesRepository } from "../../repositories/EmployeesRepository";
import { CreateEmployeeController } from "./CreateEmployeeController";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

const employeesRepository = EmployeesRepository.getInstance();
const createEmployeeUseCase = new CreateEmployeeUseCase(employeesRepository);
const createEmployeeController = new CreateEmployeeController(
  createEmployeeUseCase
);

export { createEmployeeController };
