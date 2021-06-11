import { Request, Response } from "express";

import { RemoveEmployeeUseCase } from "./RemoveEmployeeUseCase";

export class RemoveEmployeeController {
  private removeEmployeeUseCase: RemoveEmployeeUseCase;

  constructor(removeEmployeeUseCase: RemoveEmployeeUseCase) {
    this.removeEmployeeUseCase = removeEmployeeUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.removeEmployeeUseCase.execute(id);

    return response.status(200).json({
      success: "Employee successfully deleted.",
    });
  }
}
