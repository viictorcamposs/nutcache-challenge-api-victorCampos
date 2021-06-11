import { EmployeesRepository } from "../../repositories/EmployeesRepository";
import { GetEmployeeController } from "./GetEmployeeController";
import { GetEmployeeUseCase } from "./GetEmployeeUseCase";

const employeesRepository = EmployeesRepository.getInstance();
const getEmployeeUseCase = new GetEmployeeUseCase(employeesRepository);
const getEmployeeController = new GetEmployeeController(getEmployeeUseCase);

export { getEmployeeController };
