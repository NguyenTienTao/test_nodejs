import express from "express";
import siteController from "../app/controllers/siteController.js";

const siteRouter = express.Router();

siteRouter.get("/search", siteController.search);
siteRouter.get("/", siteController.index);

export default siteRouter;
