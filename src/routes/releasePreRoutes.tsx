import { Router } from "express";
import { getAllPrecons } from "../controllers/releasePreController";

const preconReleaseRouter = Router();

preconReleaseRouter.get("/preconrelease", getAllPrecons);

export default preconReleaseRouter;
