import { Employee } from "../../model/Employee";
import {
  ICreateEmployeeDTO,
  IEmployeesRepository,
} from "../../repositories/IEmployeesRepository";

export class CreateEmployeeUseCase {
  private employeesRepository: IEmployeesRepository;

  constructor(employeesRepository: IEmployeesRepository) {
    this.employeesRepository = employeesRepository;
  }

  execute(data: ICreateEmployeeDTO): Employee {
    const { name, cpf, birth, email, gender, startDate } = data;

    if (!name || !cpf || !birth || !email || !gender || !startDate) {
      throw new Error("Error: All the fields must be filled.").message;
    }

    const cpfAlreadyExists = this.employeesRepository.findByCpf(cpf);
    const emailAlreadyExists = this.employeesRepository.findByEmail(email);

    if (cpfAlreadyExists) {
      throw new Error("Error: CPF already exists.").message;
    } else if (emailAlreadyExists) {
      throw new Error("Error: Email already exists.").message;
    }

    const newEmployee = this.employeesRepository.create(data);

    return newEmployee;
  }
}
