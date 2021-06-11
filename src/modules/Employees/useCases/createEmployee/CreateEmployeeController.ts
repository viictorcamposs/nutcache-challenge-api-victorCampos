import { Request, Response } from "express";

import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

export class CreateEmployeeController {
  private createEmployeeUseCase: CreateEmployeeUseCase;

  constructor(createEmployeeUseCase: CreateEmployeeUseCase) {
    this.createEmployeeUseCase = createEmployeeUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { name, cpf, birth, email, gender, startDate, team } = request.body;

    const newEmployee = this.createEmployeeUseCase.execute({
      name,
      cpf,
      birth,
      email,
      gender,
      startDate,
      team,
    });

    return response.status(201).json(newEmployee);
  }
}
