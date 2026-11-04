    import type { Appointment, CreateAppointmentInput } from "../types/appointment.types.js";

    const appointments: Appointment[] = [];

    export const getAllAppointmentsService = (): Appointment[] => {
        return appointments;
    }

    export const getAppointmentByIdService = (id: number): Appointment | undefined => {
        return appointments.find(item => item.id === id);
    }

    export const createAppointmentService = (data: CreateAppointmentInput): Appointment => {
        const { patientName, doctorName, date, status } = data;

        const appointment: Appointment = {
            id: Date.now(),
            patientName,
            doctorName,
            date,
            status
        };

        appointments.push(appointment);

        return appointment;
    }

    export const updateAppointmentService = (id: number, data: Partial<CreateAppointmentInput>): Appointment | undefined => {

        const appointment = appointments.find(item => item.id === id);

        if(!appointment) {
            return undefined;
        }

        Object.assign(appointment, data);

        return appointment
    }

    export const deleteAppointmentService = (id: number): boolean => {
        const index = appointments.findIndex(item => item.id === id);

        if(index === -1) {
            return false;
        }

        appointments.splice(index, 1);
        return true;
    }