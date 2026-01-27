import express from "express";
import coursesController from "../app/controllers/coursesController.js";

const coursesRouter = express.Router();

coursesRouter.post("/store", coursesController.store);
coursesRouter.get("/create", coursesController.create);
coursesRouter.get("/:id/edit", coursesController.edit);
coursesRouter.post("/handle-form-actions", coursesController.handleFormActions);
coursesRouter.put("/:id", coursesController.update);
coursesRouter.patch("/:id/restore", coursesController.restore);
coursesRouter.delete("/:id", coursesController.delete);
coursesRouter.delete("/:id/force", coursesController.deleteForce);
coursesRouter.get("/:slug", coursesController.show);
coursesRouter.get("/", coursesController.index);

export default coursesRouter;
