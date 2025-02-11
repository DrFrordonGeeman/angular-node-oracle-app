import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Person } from "../entity/Person";

dotenv.config(); // Ensure this line is present

export const AppDataSource = new DataSource({
  type: "oracle",
  host: process.env.DB_HOST,
  port: 1521,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Person],
});