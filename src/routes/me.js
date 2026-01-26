import express from "express";
import meController from "../app/controllers/meController.js";

const meRouter = express.Router();

meRouter.get("/stored-courses", meController.index);
meRouter.get("/restored-courses", meController.restore);

export default meRouter;
