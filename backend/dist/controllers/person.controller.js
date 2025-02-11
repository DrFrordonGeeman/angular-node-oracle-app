"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPerson = exports.getAllPersons = void 0;
const ormconfig_1 = require("../config/ormconfig");
const Person_1 = require("../entity/Person");
const getAllPersons = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const persons = yield ormconfig_1.AppDataSource.getRepository(Person_1.Person).find();
    res.json(persons);
});
exports.getAllPersons = getAllPersons;
const addPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPerson = ormconfig_1.AppDataSource.getRepository(Person_1.Person).create(req.body);
    const result = yield ormconfig_1.AppDataSource.getRepository(Person_1.Person).save(newPerson);
    res.json(result);
});
exports.addPerson = addPerson;
