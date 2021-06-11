import { Router } from "express";

import { createEmployeeController } from "../modules/Employees/useCases/createEmployee";
import { editEmployeeController } from "../modules/Employees/useCases/editEmployee";
import { getEmployeeController } from "../modules/Employees/useCases/getEmployee";
import { listEmployeesController } from "../modules/Employees/useCases/listEmployees";
import { removeEmployeeController } from "../modules/Employees/useCases/removeEmployee";

const employeesRoutes = Router();

employeesRoutes.get("/", (request, response) =>
  listEmployeesController.handle(request, response)
);

employeesRoutes.get("/:id", (request, response) =>
  getEmployeeController.handle(request, response)
);

employeesRoutes.post("/", (request, response) =>
  createEmployeeController.handle(request, response)
);

employeesRoutes.put("/:id", (request, response) =>
  editEmployeeController.handle(request, response)
);

employeesRoutes.delete("/:id", (request, response) =>
  removeEmployeeController.handle(request, response)
);

export { employeesRoutes };
