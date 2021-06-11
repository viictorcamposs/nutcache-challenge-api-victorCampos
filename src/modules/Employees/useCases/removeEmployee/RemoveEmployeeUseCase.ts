import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

export class RemoveEmployeeUseCase {
  private employeesRepository: IEmployeesRepository;

  constructor(employeesRepository: IEmployeesRepository) {
    this.employeesRepository = employeesRepository;
  }

  execute(id: string): void {
    const employee = this.employeesRepository.findById(id);

    if (!employee) {
      throw new Error("Error: Employee not found.").message;
    }

    this.employeesRepository.remove(id);
  }
}
