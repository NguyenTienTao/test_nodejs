import express from "express";
import meController from "../app/controllers/meController.js";

const meRouter = express.Router();

meRouter.get("/stored-courses", meController.index);

export default meRouter;
