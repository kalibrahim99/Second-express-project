"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const events_router_1 = __importDefault(require("./api/router/events.router"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use("/api/events", events_router_1.default);
// port of server run !1
app.listen(port, () => {
    console.log(`server run in the port ${port}`);
});
//# sourceMappingURL=main.js.map