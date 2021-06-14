import { AppError } from "../../../../errors/AppError";
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
      throw new AppError("Error: Employee not found.");
    }

    const cpfAlreadyExists = this.employeesRepository.findByCpf(data.cpf);
    const emailAlreadyExists = this.employeesRepository.findByEmail(data.email);

    if (employee.cpf !== data.cpf && cpfAlreadyExists) {
      throw new AppError("Error: CPF already exists.", 401);
    } else if (employee.email !== data.email && emailAlreadyExists) {
      throw new AppError("Error: Email already exists.", 401);
    }

    const editedEmployee = this.employeesRepository.edit(id, data);

    return editedEmployee;
  }
}
