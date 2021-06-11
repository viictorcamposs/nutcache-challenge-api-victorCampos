import { Employee } from "../model/Employee";

export interface ICreateEmployeeDTO {
  name: string;
  cpf: string;
  birth: Date;
  gender: string;
  email: string;
  startDate: Date;
  team?: string;
}

export interface IUpdateEmployeeDTO {
  name: string;
  cpf: string;
  birth: Date;
  gender: string;
  email: string;
  startDate: Date;
  team?: string;
}

export interface IEmployeesRepository {
  list(): Employee[];
  findById(id: string): Employee;
  findByCpf(cpf: string): Employee;
  findByEmail(email: string): Employee;
  create(employee: ICreateEmployeeDTO): Employee;
  edit(id: string, updatedData: IUpdateEmployeeDTO): Employee;
  remove(id: string): void;
}
