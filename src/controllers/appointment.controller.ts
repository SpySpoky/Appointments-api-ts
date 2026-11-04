import type { Request, Response, NextFunction } from "express";
import type { Appointment, CreateAppointmentInput } from "../types/appointment.types.js";
import { getAllAppointmentsService, getAppointmentByIdService, createAppointmentService, updateAppointmentService, deleteAppointmentService } from "../services/appointment.service.js";


// GET ALL

export const getAppointments = (_req: Request, res: Response) => {
    const appointments = getAllAppointmentsService();

    res.status(200).json({
        message: "All appointments",
        appointments
    });
}

// GET BY ID
export const getAppointmentById = (req: Request<{id: string}>, res: Response) => {
    const id = Number(req.params.id);

    const appointment = getAppointmentByIdService(id);

    if (!appointment) {
        return res.status(404).json({
            message: "Appointment not found"
        });
    }

    return res.status(200).json({
        appointment,
        message: "Appointment found"
    });
}

// POST
export const createAppointment = (req: Request<{}, any, CreateAppointmentInput>, res: Response) => {
    const appointment = createAppointmentService(req.body);

    return res.status(201).json({
        message: "Appointment was created!",
        appointment
    });
}

// PATCH
export const updateAppointment = (req: Request<{ id: string }, any, Partial<CreateAppointmentInput>>, res: Response) => {
    const id = Number(req.params.id);

    const appointment = updateAppointmentService(id, req.body);

    if (!appointment) {
        return res.status(404).json({
            message: "Appointment not found"
        });
    }   

    return res.status(200).json({
        message: "Appointment was updated!",
        appointment
    })
};

// DELETE
export const deleteAppointment = (req: Request<{ id: string }>, res: Response) => {
    const id = Number(req.params.id);

    const isDeleted = deleteAppointmentService(id);

    if (!isDeleted) {
        return res.status(404).json({
            message: "Appointment not found"
        });
    }

    return res.status(200).json({
        message: "Appointment was deleted"
    });
};
