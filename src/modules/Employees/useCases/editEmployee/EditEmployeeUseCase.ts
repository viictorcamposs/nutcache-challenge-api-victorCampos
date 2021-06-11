import { Employee } from "../../model/Employee";
import {
  IEmployeesRepository,
  IUpdateEmployeeDTO,
} from "../../repositories/IEmployeesRepository";

export class EditEmployeeUseCase {
  private employeesRepository: IEmployeesRepository;

  constructor(employeesRepository: IEmployeesRepository) {
    this.employeesRepository = employeesRepository;
  }

  execute(id: string, data: IUpdateEmployeeDTO): Employee {
    const employee = this.employeesRepository.findById(id);

    if (!employee) {
      throw new Error("Error: Employee not found.").message;
    }

    const cpfAlreadyExists = this.employeesRepository.findByCpf(data.cpf);
    const emailAlreadyExists = this.employeesRepository.findByEmail(data.email);

    if (employee.cpf !== data.cpf && cpfAlreadyExists) {
      throw new Error("Error: CPF already exists.").message;
    } else if (employee.email !== data.email && emailAlreadyExists) {
      throw new Error("Error: Email already exists.").message;
    }

    const editedEmployee = this.employeesRepository.edit(id, data);

    return editedEmployee;
  }
}
