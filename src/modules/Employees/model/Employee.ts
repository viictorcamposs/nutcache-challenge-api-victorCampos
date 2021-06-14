import { v4 as uuidv4 } from "uuid";

export class Employee {
  id?: string;
  name: string;
  birth: Date;
  gender: string;
  email: string;
  cpf: string;
  startDate: Date;
  team?: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
