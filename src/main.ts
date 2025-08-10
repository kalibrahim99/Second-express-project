import express from 'express';
import eventsRouter from './api/router/events.router';
const app = express();
const port = 3000;

app.use(express.json())
app.use("/api/events", eventsRouter);
// port of server run !1
app.listen(port, () => {
    console.log(`server run in the port ${port}`)
})
