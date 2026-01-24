import express from "express";
import coursesController from "../app/controllers/coursesController.js";

const coursesRouter = express.Router();

coursesRouter.post("/store", coursesController.store);
coursesRouter.get("/create", coursesController.create);
coursesRouter.get("/:id/edit", coursesController.edit);
coursesRouter.patch("/:id", coursesController.update);
coursesRouter.delete("/:id", coursesController.delete);
coursesRouter.get("/:slug", coursesController.show);
coursesRouter.get("/", coursesController.index);

export default coursesRouter;
