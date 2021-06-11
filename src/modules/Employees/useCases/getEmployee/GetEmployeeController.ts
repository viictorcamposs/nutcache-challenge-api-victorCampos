import { Request, Response } from "express";

import { GetEmployeeUseCase } from "./GetEmployeeUseCase";

export class GetEmployeeController {
  private getEmployeeUseCase: GetEmployeeUseCase;

  constructor(getEmployeeUseCase: GetEmployeeUseCase) {
    this.getEmployeeUseCase = getEmployeeUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    const employee = this.getEmployeeUseCase.execute(id);

    return response.status(200).json(employee);
  }
}
