export type AppointmentStatus = "scheduled" | "completed" | "cancelled";

export interface Appointment {
    id: number;
    patientName: string;
    doctorName: string;
    date: string;
    status: AppointmentStatus;
}

export interface CreateAppointmentInput {
    patientName: string;
    doctorName: string;
    date: string;
    status: AppointmentStatus;
}