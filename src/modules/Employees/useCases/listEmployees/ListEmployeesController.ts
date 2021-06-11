import { Request, Response } from "express";

import { ListEmployeesUseCase } from "./ListEmployeesUseCase";

export class ListEmployeesController {
  private listEmployeesUseCase: ListEmployeesUseCase;

  constructor(listEmployeesUseCase: ListEmployeesUseCase) {
    this.listEmployeesUseCase = listEmployeesUseCase;
  }

  handle(request: Request, response: Response): Response {
    const employees = this.listEmployeesUseCase.execute();

    return response.status(200).json(employees);
  }
}
