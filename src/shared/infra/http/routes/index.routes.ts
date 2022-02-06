import { Router } from 'express';

import authRoutes from "../../../../modules/auth/infra/http/routes/auth.routes";
import authenticRoutes from "../../../../modules/auth/infra/http/routes/authentic.routes";

import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";
import categoriesRoutes from "../../../../modules/categories/infra/http/routes/categories.routes";
import productsRoutes from "../../../../modules/products/infra/http/routes/products.routes";
import ordersRoutes from "../../../../modules/orders/infra/http/routes/orders.routes";



const routes = Router();


    routes.use('/login', authRoutes);
    routes.use('/authenticated', authenticRoutes);

    routes.use("/clients", clientsRoutes);
    routes.use("/categories", categoriesRoutes);
    routes.use("/products", clientsRoutes);
    routes.use("/orders", clientsRoutes);

export default routes;