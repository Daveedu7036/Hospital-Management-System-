# 🌐 REST API Specification

## Standard Response Format

All API responses follow a uniform wrapper format (`ApiResponse<T>`):

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { ... },
  "timestamp": "2026-09-19T11:15:00",
  "path": "/api/v1/health"
}
```

Standard Error Response:
```json
{
  "success": false,
  "message": "Validation failed / Resource not found",
  "errors": ["Field 'phone' cannot be empty"],
  "timestamp": "2026-09-19T11:15:00",
  "path": "/api/v1/patients"
}
```

---

## 1. System Health & Metadata APIs

### `GET /api/v1/health`
- **Description**: Returns backend operational status, active profile, database connectivity state, and timestamp.
- **Access**: Public
- **Sample Response**:
```json
{
  "success": true,
  "message": "Smart Hospital Backend is operational",
  "data": {
    "status": "UP",
    "service": "smart-hospital-backend",
    "version": "1.0.0",
    "database": "CONNECTED",
    "timestamp": "2026-09-19T11:15:00.123Z"
  }
}
```

---

## 2. Authentication & Authorization APIs

### `POST /api/v1/auth/login`
- **Request Payload**:
```json
{
  "username": "dr.sharma",
  "password": "Password123!"
}
```
- **Response**:
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiJ9...",
    "tokenType": "Bearer",
    "expiresIn": 86400000,
    "user": {
      "id": 2,
      "username": "dr.sharma",
      "email": "sharma@hospital.com",
      "role": "DOCTOR"
    }
  }
}
```

---

## 3. Core Resource Endpoints Matrix

| Module | Method | Endpoint | Allowed Roles | Description |
|---|---|---|---|---|
| **Patients** | `GET` | `/api/v1/patients` | Admin, Doctor, Receptionist | List all patients with search/pagination |
| **Patients** | `POST` | `/api/v1/patients` | Admin, Receptionist | Register a new patient |
| **Appointments** | `GET` | `/api/v1/appointments` | All Staff | View appointment roster |
| **Appointments** | `POST` | `/api/v1/appointments` | Receptionist, Patient | Book new appointment slot |
| **Medical Records**| `POST` | `/api/v1/medical-records` | Doctor | Record diagnosis, vitals, consultation |
| **Pharmacy** | `POST` | `/api/v1/pharmacy/dispense` | Pharmacist | Dispense prescription & auto-deduct stock |
| **Billing** | `POST` | `/api/v1/invoices` | Accountant, Admin | Generate invoice |
| **Audit Logs** | `GET` | `/api/v1/audit-logs` | Admin | View system security trace logs |
