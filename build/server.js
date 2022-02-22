"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const PORT = 1234;
exports.app = (0, express_1.default)();
exports.app.get("/", (req, res) => {
    res.send("Typescript with Express");
});
exports.server = exports.app.listen(PORT, () => {
    console.log(`Typescript with Express (http://localhost:${PORT}/)`);
});
exports.default = exports.server;
