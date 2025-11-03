import express from 'express';
import dotenv from 'dotenv';
import usersRoutes from "./routes/routes.user";
import stopsRoutes from "./routes/routes.stops";
import syndicatesRoutes from "./routes/routes.syndicates";
import timesRoutes from "./routes/routes.times";
import transportRoutes from "./routes/routes.transport";
import { loggerMiddleware } from './middlewares/middleware.logger';



dotenv.config();
const app =express();
const PORT = 3000;
app.use(express.json());

// Middleware de logging
app.use(loggerMiddleware);
app.use("/users", usersRoutes);
app.use("/stops", stopsRoutes);
app.use("/syndicates", syndicatesRoutes);
app.use("/times", timesRoutes);
app.use("/transport", transportRoutes);

app.listen(PORT, () => {
    console.log(`servidor "mi parada" va sobre ruedas por el puerto http://localhost:${PORT}`);
});



