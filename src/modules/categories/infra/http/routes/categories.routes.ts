import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController";

const categoriesRoutes = Router();

categoriesRoutes.post("/", CategoriesController.create);
categoriesRoutes.patch("/:category_id", CategoriesController.update);
categoriesRoutes.get("/", CategoriesController.index);
categoriesRoutes.get("/:category_id", CategoriesController.findById);
categoriesRoutes.delete("/:category_id", CategoriesController.delete);
        
export default categoriesRoutes;