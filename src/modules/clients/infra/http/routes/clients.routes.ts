import { Router } from "express";
import ClientsController from "../controllers/ClientsController";

const clientsRoutes = Router();

    clientsRoutes.post("/", ClientsController.create);
    clientsRoutes.patch("/:id", ClientsController.update);
    clientsRoutes.get("/", ClientsController.index);
    clientsRoutes.get("/:id", ClientsController.findById);
    clientsRoutes.get("/:name", ClientsController.findByName);
    clientsRoutes.get("/:cpf", ClientsController.findByCpf);
    clientsRoutes.delete("/:id", ClientsController.delete);

export default clientsRoutes;
