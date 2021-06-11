import { EmployeesRepository } from "../../repositories/EmployeesRepository";
import { RemoveEmployeeController } from "./RemoveEmployeeController";
import { RemoveEmployeeUseCase } from "./RemoveEmployeeUseCase";

const employeesRepository = EmployeesRepository.getInstance();
const removeEmployeeUseCase = new RemoveEmployeeUseCase(employeesRepository);
const removeEmployeeController = new RemoveEmployeeController(
  removeEmployeeUseCase
);

export { removeEmployeeController };
