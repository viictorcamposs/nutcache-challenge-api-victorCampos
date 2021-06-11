import { Employee } from "../../model/Employee";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

export class ListEmployeesUseCase {
  private employeesRepository: IEmployeesRepository;

  constructor(employeesRepository: IEmployeesRepository) {
    this.employeesRepository = employeesRepository;
  }

  execute(): Employee[] {
    return this.employeesRepository.list();
  }
}
