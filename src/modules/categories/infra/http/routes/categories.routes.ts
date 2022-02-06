import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController";

const routes = Router();

        routes.post("/", CategoriesController.create);
        routes.patch("/:category_id", CategoriesController.update);
        routes.get("/", CategoriesController.index);
        routes.get("/:category_id", CategoriesController.findById);
        routes.delete("/:category_id", CategoriesController.delete);
        
export default routes;