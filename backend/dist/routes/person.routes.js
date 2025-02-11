"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const person_controller_1 = require("../controllers/person.controller");
const router = (0, express_1.Router)();
router.get("/", person_controller_1.getAllPersons);
router.post("/", person_controller_1.addPerson);
exports.default = router;
