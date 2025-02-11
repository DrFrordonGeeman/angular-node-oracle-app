"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ormconfig_1 = require("./config/ormconfig");
const person_routes_1 = __importDefault(require("./routes/person.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/persons", person_routes_1.default);
ormconfig_1.AppDataSource.initialize()
    .then(() => {
    app.listen(3000, () => console.log("Server running on port 3000"));
})
    .catch((error) => console.log(error));
