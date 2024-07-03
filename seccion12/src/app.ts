import express, { Request, Response, NextFunction } from "express";
import router from "./routes/todo";
import { json } from "body-parser";

const app = express();
app.use(json());
app.use('/todos', router);
app.use((err : Error, req : Request, resp : Response, next : NextFunction) => {
    resp.status(500).json({ message: err.message });
});
app.listen(3000)