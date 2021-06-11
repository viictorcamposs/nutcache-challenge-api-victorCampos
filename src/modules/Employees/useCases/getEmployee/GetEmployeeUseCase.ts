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
      throw new Error("Error: Employee not found.").message;
    }

    return employee;
  }
}
