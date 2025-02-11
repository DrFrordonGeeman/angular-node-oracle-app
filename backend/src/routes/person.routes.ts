import { Router } from "express";
import { getAllPersons, addPerson } from "../controllers/person.controller";

const router = Router();

router.get("/", getAllPersons);
router.post("/", addPerson);

export default router;