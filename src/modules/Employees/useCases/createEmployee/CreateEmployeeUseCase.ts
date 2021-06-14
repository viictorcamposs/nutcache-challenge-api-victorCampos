import { AppError } from "../../../../errors/AppError";
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
      throw new AppError("Error: All the fields must be filled.");
    }

    const cpfAlreadyExists = this.employeesRepository.findByCpf(cpf);
    const emailAlreadyExists = this.employeesRepository.findByEmail(email);

    if (cpfAlreadyExists) {
      throw new AppError("Error: CPF already exists.", 401);
    } else if (emailAlreadyExists) {
      throw new AppError("Error: Email already exists.", 401);
    }

    const newEmployee = this.employeesRepository.create(data);

    return newEmployee;
  }
}
