import { Employee } from "../model/Employee";
import {
  ICreateEmployeeDTO,
  IEmployeesRepository,
  IUpdateEmployeeDTO,
} from "./IEmployeesRepository";

export class EmployeesRepository implements IEmployeesRepository {
  private employees: Employee[];

  private static INSTANCE: EmployeesRepository;

  private constructor() {
    this.employees = [];
  }

  public static getInstance(): EmployeesRepository {
    if (!EmployeesRepository.INSTANCE) {
      EmployeesRepository.INSTANCE = new EmployeesRepository();
    }

    return EmployeesRepository.INSTANCE;
  }

  list(): Employee[] {
    return this.employees;
  }

  findById(id: string): Employee {
    return this.employees.find((employee) => employee.id === id);
  }

  findByCpf(cpf: string): Employee {
    const employee = this.employees.find((employee) => employee.cpf === cpf);

    return employee;
  }

  findByEmail(email: string): Employee {
    const employee = this.employees.find(
      (employee) => employee.email === email
    );

    return employee;
  }

  create(employee: ICreateEmployeeDTO): Employee {
    const newEmployee = new Employee();

    Object.assign(newEmployee, {
      ...employee,
      created_at: new Date(),
    });

    this.employees.push(newEmployee);

    return newEmployee;
  }

  edit(id: string, updatedData: IUpdateEmployeeDTO): Employee {
    const employee = this.findById(id);

    const editedEmployee = {
      ...employee,
      ...updatedData,
    };

    this.employees = this.employees.filter((employee) => employee.id !== id);
    this.employees.push(editedEmployee);

    return editedEmployee;
  }

  remove(id: string): void {
    this.employees = this.employees.filter((employee) => employee.id !== id);
  }
}
