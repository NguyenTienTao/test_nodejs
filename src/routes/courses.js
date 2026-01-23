import express from "express";
import coursesController from "../app/controllers/coursesController.js";

const coursesRouter = express.Router();

coursesRouter.post("/store", coursesController.store);
coursesRouter.get("/create", coursesController.create);
coursesRouter.get("/:slug", coursesController.show);
coursesRouter.get("/", coursesController.index);

export default coursesRouter;
