import express from "express";
import appointmentRouter  from "./routes/appointment.routes.js";
import requestLogger from "./middleware/requestLogger.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = 4200;

app.use(express.json());
app.use(requestLogger);

app.use("/api/appointments", appointmentRouter)



app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});