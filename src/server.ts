import express from 'express';
import dotenv from 'dotenv';
import usersRoutes from "./routes/routes.user";
import stopsRoutes from "./routes/stops.routes";
import syndicatesRoutes from "./routes/syndicates.routes";
import timesRoutes from "./routes/times.routes";
import transportRoutes from "./routes/routes.transport";
import { loggerMiddleware } from "./middlewares/middleware.logger";


dotenv.config();
const app =express();
const PORT = 3000;
app.use(express.json());
app.use(loggerMiddleware);

app.use("/users", usersRoutes);
app.use("/stops", stopsRoutes);
app.use("/syndicates", syndicatesRoutes);
app.use("/times", timesRoutes);
app.use("/transport", transportRoutes);

app.listen(PORT, () => {
    console.log(`servidor "mi parada" va sobre ruedas por el puerto http://localhost:${PORT}`);
});



