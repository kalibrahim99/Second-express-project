import express from 'express';
import mainRouter from "./routers/index"
const app = express();
const port = 3000;

app.use(express.json())

app.use("/api", mainRouter)

// port of server run !1
app.listen(port, () => {
    console.log(`server run in the port ${port}`)
})