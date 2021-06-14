import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import "express-async-errors";

import { AppError } from "./errors/AppError";
import { employeesRoutes } from "./routes/employees.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/nutemployee", employeesRoutes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json(err.message);
    }

    return response.status(500).json({
      status: "Error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3030, () => console.log("Server is running on port 3030"));
