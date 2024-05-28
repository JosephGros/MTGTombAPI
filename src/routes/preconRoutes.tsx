import { Router } from "express";
import { getAllPrecons, getPrecon } from "../controllers/preconController";

const preconRouter = Router();

preconRouter.get("/precons", getAllPrecons);
preconRouter.get("/precons/:name", getPrecon);

export default preconRouter;