import { 
    getAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment
} from "../controllers/appointment.controller.js";
import validateAppointment from "../middleware/validateAppointment.js";
import validateAppointmentUpdate from "../middleware/validateAppointmentUpdate.js";
import { Router } from "express";

const router = Router();

router.get("/", getAppointments);
router.get("/:id", getAppointmentById);
router.post("/", validateAppointment, createAppointment);
router.patch("/:id",validateAppointmentUpdate, updateAppointment);
router.delete("/:id", deleteAppointment);


export default router;