# Appointments API

A RESTful API built with Node.js, Express 5, and TypeScript for managing medical appointments.

## Tech Stack

- Node.js
- Express 5
- TypeScript
- ESM (ECMAScript Modules)

## Features

- Create, read, update, and delete appointments (CRUD)
- Request validation middleware
- Centralized error handling
- Request logging middleware
- Type-safe appointment models
- In-memory data storage

## Project Structure

```text
src/
├── controllers/
│   └── appointment.controller.ts
├── middleware/
│   ├── errorHandler.ts
│   ├── requestLogger.ts
│   ├── validateAppointment.ts
│   └── validateAppointmentUpdate.ts
├── routes/
│   └── appointment.routes.ts
├── services/
│   └── appointment.service.ts
├── types/
│   └── appointment.types.ts
└── index.ts
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd appointments-api-ts
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The server will start at:

```text
http://localhost:4200
```

## API Endpoints

Base URL: `/api/appointments`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Get all appointments |
| GET | `/:id` | Get an appointment by ID |
| POST | `/` | Create an appointment |
| PATCH | `/:id` | Update an appointment |
| DELETE | `/:id` | Delete an appointment |

### Appointment Object

```json
{
  "id": 1,
  "patientName": "John Smith",
  "doctorName": "Dr. Brown",
  "date": "2026-11-10",
  "status": "scheduled"
}
```

### Create Appointment

`POST /api/appointments`

```json
{
  "patientName": "John Smith",
  "doctorName": "Dr. Brown",
  "date": "2026-11-10",
  "status": "scheduled"
}
```

### Update Appointment

`PATCH /api/appointments/1`

Only the fields being updated need to be provided.

```json
{
  "status": "completed"
}
```

### Appointment Statuses

- `scheduled`
- `completed`
- `cancelled`

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Compile TypeScript into JavaScript |
| `npm start` | Run the compiled application |
| `npm run typecheck` | Check TypeScript types without generating files |

## Error Handling

The API uses centralized error-handling middleware and returns appropriate HTTP status codes, including:

- `400` — Invalid request data
- `404` — Appointment not found
- `500` — Internal server error

## Data Storage

Currently, appointments are stored in memory. Data is reset whenever the server restarts.

Database integration is not implemented yet.

## License

This project is available for educational and portfolio purposes.
