import { AppError } from "../../../../errors/AppError";
import { Employee } from "../../model/Employee";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

export class GetEmployeeUseCase {
  private employeesRepository: IEmployeesRepository;

  constructor(employeesRepository: IEmployeesRepository) {
    this.employeesRepository = employeesRepository;
  }

  execute(id: string): Employee {
    const employee = this.employeesRepository.findById(id);

    if (!employee) {
      throw new AppError("Error: Employee not found.");
    }

    return employee;
  }
}
