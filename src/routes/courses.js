import express from "express";
import coursesController from "../app/controllers/coursesController.js";

const coursesRouter = express.Router();

coursesRouter.get("/:slug", coursesController.show);
coursesRouter.get("/", coursesController.index);

export default coursesRouter;
