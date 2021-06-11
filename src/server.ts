import express from "express";

import { employeesRoutes } from "./routes/employees.routes";

const app = express();

app.use(express.json());
app.use("/nutemployee", employeesRoutes);

app.listen(3030, () => console.log("Server is running on port 3030"));
