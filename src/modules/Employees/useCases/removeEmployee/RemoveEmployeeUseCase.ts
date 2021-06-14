import { AppError } from "../../../../errors/AppError";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

export class RemoveEmployeeUseCase {
  private employeesRepository: IEmployeesRepository;

  constructor(employeesRepository: IEmployeesRepository) {
    this.employeesRepository = employeesRepository;
  }

  execute(id: string): void {
    const employee = this.employeesRepository.findById(id);

    if (!employee) {
      throw new AppError("Error: Employee not found.");
    }

    this.employeesRepository.remove(id);
  }
}
