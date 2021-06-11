import { EmployeesRepository } from "../../repositories/EmployeesRepository";
import { EditEmployeeController } from "./EditEmployeeController";
import { EditEmployeeUseCase } from "./EditEmployeeUseCase";

const employeesRepository = EmployeesRepository.getInstance();
const editEmployeeUseCase = new EditEmployeeUseCase(employeesRepository);
const editEmployeeController = new EditEmployeeController(editEmployeeUseCase);

export { editEmployeeController };
