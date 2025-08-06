"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routers/index"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use("/api", index_1.default);
// port of server run !1
app.listen(port, () => {
    console.log(`server run in the port ${port}`);
});
