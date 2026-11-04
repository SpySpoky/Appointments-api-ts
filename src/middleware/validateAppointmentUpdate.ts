import type { Request, Response, NextFunction } from "express";

const validateAppointmentUpdate = (req: Request, res: Response, next: NextFunction):void  => {

    if (!req.body || Object.keys(req.body).length === 0) {
        res.status(400).json({
            message: "Request body cannot be empty"
        });
        return;
    }

    const { patientName, doctorName, date, status } = req.body;

    if (patientName !== undefined &&
        (typeof patientName !== "string" || !patientName.trim())) {
        res.status(400).json({
            message: "Invalid patient name"
        });
        return;
    }

    if (doctorName !== undefined &&
        (typeof doctorName !== "string" || !doctorName.trim())) {
        res.status(400).json({
            message: "Invalid doctor name"
        });
        return;
    }

    if (date !== undefined) {
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;

        if (typeof date !== "string" || !datePattern.test(date)) {
            res.status(400).json({
                message: "Invalid date format. Expected YYYY-MM-DD"
            });
            return;
        }
    }

    if (status !== undefined &&
        status !== "scheduled" &&
        status !== "completed" &&
        status !== "cancelled") {
        res.status(400).json({
            message: "Invalid appointment status"
        });
        return;
    }

    next();
}

export default validateAppointmentUpdate;