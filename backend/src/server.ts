import "reflect-metadata"
import express from "express";
import cors from "cors";
import { AppDataSource } from "./config/ormconfig";
import personRoutes from "./routes/person.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/persons", personRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((error) => console.log(error));