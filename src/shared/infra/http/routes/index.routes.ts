import { Router } from 'express';

//import registerRoutes from "../../../../modules/auth/infra/http/routes/register.routes";
//import loginRoutes from "../../../../modules/auth/infra/http/routes/login.routes";

//import resetRoutes from "../../../../modules/auth/infra/http/routes/reset.routes";


//import authenticatedRoutes from "../../../../modules/auth/infra/http/routes/authenticated.routes";
//import authorizedRoutes from "../../../../modules/auth/infra/http/routes/authorized.routes";


//import dashboardRoutes from "../../../../modules/auth/infra/http/routes/dashboard.routes";

import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";
import categoriesRoutes from "../../../../modules/categories/infra/http/routes/categories.routes";
import productsRoutes from "../../../../modules/products/infra/http/routes/products.routes";
import ordersRoutes from "../../../../modules/orders/infra/http/routes/orders.routes";

//import logoutRoutes from "../../../../modules/auth/infra/http/routes/logout.routes";

const routes = Router();


    //routes.use("/register", registerRoutes);
    //routes.use('/login', loginRoutes);
    //routes.use('/reset', resetRoutes);

    //routes.use('/profile', profileRoutes);

    //routes.use('/authenticated', authenticatedRoutes);
    //routes.use('/authorized', authorizedRoutes);

    //routes.use('/dashboard', dashboardRoutes);

    routes.use("/clients", clientsRoutes);
    routes.use("/categories", categoriesRoutes);
    routes.use("/products", productsRoutes);
    routes.use("/orders", ordersRoutes);

    //routes.use('/logout', logoutRoutes);

export default routes;