import { Request, Response } from "express";
import { AppDataSource } from "../config/ormconfig";
import { Person } from "../entity/Person";

export const getAllPersons = async (_req: Request, res: Response) => {
  const persons = await AppDataSource.getRepository(Person).find();
  res.json(persons);
};

export const addPerson = async (req: Request, res: Response) => {
  const newPerson = AppDataSource.getRepository(Person).create(req.body);
  const result = await AppDataSource.getRepository(Person).save(newPerson);
  res.json(result);
};