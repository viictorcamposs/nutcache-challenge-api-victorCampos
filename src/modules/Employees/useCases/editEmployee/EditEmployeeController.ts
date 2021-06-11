import { Request, Response } from "express";

import { EditEmployeeUseCase } from "./EditEmployeeUseCase";

export class EditEmployeeController {
  private editEmployeeUseCase: EditEmployeeUseCase;

  constructor(editEmployeeUseCase: EditEmployeeUseCase) {
    this.editEmployeeUseCase = editEmployeeUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const data = request.body;

    const editedEmployee = this.editEmployeeUseCase.execute(id, data);

    return response.status(200).json(editedEmployee);
  }
}
