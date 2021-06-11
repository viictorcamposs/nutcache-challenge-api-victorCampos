import { EmployeesRepository } from "../../repositories/EmployeesRepository";
import { ListEmployeesController } from "./ListEmployeesController";
import { ListEmployeesUseCase } from "./ListEmployeesUseCase";

const employeesRepository = EmployeesRepository.getInstance();
const listEmployeesUseCase = new ListEmployeesUseCase(employeesRepository);
const listEmployeesController = new ListEmployeesController(
  listEmployeesUseCase
);

export { listEmployeesController };
