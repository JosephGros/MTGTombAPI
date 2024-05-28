import { Router } from "express";
import { getAllTopComs, getTopComByName } from "../controllers/topComController";

const topComRouter = Router();

topComRouter.get("/topcoms", getAllTopComs);
topComRouter.get("/topcoms/:name", getTopComByName);

export default topComRouter;