import { Router } from "express";
import { getAllPrecons, getPrecon } from "../controllers/releasePreController";

const preconReleaseRouter = Router();

preconReleaseRouter.get("/preconrelease", getAllPrecons);
preconReleaseRouter.get("/fullprecon/:name", getPrecon);

export default preconReleaseRouter;
