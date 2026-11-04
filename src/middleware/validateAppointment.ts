import type { Request, Response, NextFunction } from "express";

const validateAppointment = (req: Request, res: Response, next: NextFunction): void => {
    const { patientName, doctorName, date, status } = req.body;

    if (!patientName || !doctorName || !date || !status ) {
        res.status(400).json({
            message: "All fields are required"
        });
        return;
    }

    if(typeof patientName !== "string" || typeof doctorName !== "string" || typeof date !== "string") {
        res.status(400).json({
            message: "Invalid field types"
        });
        return;
    }

    if(status !== "scheduled" && status !== "completed" && status !== "cancelled") {
        res.status(400).json({
            message: "Invalid appointment status"
        });
        return
    }

    if (patientName.trim().length === 0 || doctorName.trim().length === 0 || date.trim().length === 0) {
        res.status(400).json({
            message: "Fields cannot be empty"
        });
        return 
    }

    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    if (!datePattern.test(date)) {
        res.status(400).json({
            message: "Invalid date format. Expected YYYY-MM-DD"
        });
        return;
    }

    next();
}

export default validateAppointment;