# 🗄️ Database Design & Entity Relationship Specification

## 1. Relational Entity Overview

```text
               ┌──────────────┐
               │    Users     │ (Admin, Doctor, Patient, Pharmacist, etc.)
               └──────┬───────┘
                      │ 1:1
        ┌─────────────┴─────────────┐
        ▼                           ▼
 ┌─────────────┐             ┌─────────────┐
 │  Patients   │             │   Doctors   │
 └──────┬──────┘             └──────┬──────┘
        │                            │ 1:N
        │ 1:N                        ▼
        │                    ┌──────────────┐
        ├───────────────────>│ Appointments │
        │                    └──────────────┘
        │ 1:N
        ├───────────────────> MedicalRecords ───> Prescriptions ───> PrescriptionItems
        │                                 └───> LabRequests ────> LabReports
        │ 1:N
        └───────────────────> Invoices ─────────> Payments
```

## 2. Table Schemas

### `users`
- `id` (BIGINT, Primary Key, Auto-increment)
- `username` (VARCHAR(50), Unique, Not Null)
- `email` (VARCHAR(100), Unique, Not Null)
- `password` (VARCHAR(255), Not Null — BCrypt hash)
- `role` (VARCHAR(30), Not Null — `ADMIN`, `DOCTOR`, `NURSE`, `RECEPTIONIST`, `LAB_TECHNICIAN`, `PHARMACIST`, `ACCOUNTANT`, `PATIENT`)
- `is_active` (BOOLEAN, Default True)
- `created_at` (TIMESTAMP, Default CURRENT_TIMESTAMP)
- `updated_at` (TIMESTAMP, Default CURRENT_TIMESTAMP)

### `patients`
- `id` (BIGINT, Primary Key)
- `user_id` (BIGINT, Foreign Key -> `users.id`)
- `patient_code` (VARCHAR(20), Unique, Not Null — e.g. `P1001`)
- `first_name` (VARCHAR(50), Not Null)
- `last_name` (VARCHAR(50), Not Null)
- `dob` (DATE, Not Null)
- `gender` (VARCHAR(10), Not Null)
- `blood_group` (VARCHAR(5))
- `phone` (VARCHAR(20), Not Null)
- `emergency_contact` (VARCHAR(20))
- `allergies` (TEXT)
- `medical_history` (TEXT)

### `doctors`
- `id` (BIGINT, Primary Key)
- `user_id` (BIGINT, Foreign Key -> `users.id`)
- `doctor_code` (VARCHAR(20), Unique, Not Null — e.g. `D1001`)
- `department_id` (BIGINT, Foreign Key -> `departments.id`)
- `specialization` (VARCHAR(100), Not Null)
- `consultation_fee` (DECIMAL(10,2), Not Null)
- `experience_years` (INT)
- `availability_status` (VARCHAR(20), Default `AVAILABLE`)

### `departments`
- `id` (BIGINT, Primary Key)
- `name` (VARCHAR(100), Unique, Not Null — e.g. `Cardiology`)
- `description` (TEXT)
- `head_doctor_id` (BIGINT)

### `appointments`
- `id` (BIGINT, Primary Key)
- `appointment_code` (VARCHAR(20), Unique)
- `patient_id` (BIGINT, Foreign Key -> `patients.id`)
- `doctor_id` (BIGINT, Foreign Key -> `doctors.id`)
- `appointment_date` (DATE, Not Null)
- `time_slot` (TIME, Not Null)
- `status` (VARCHAR(20), Not Null — `SCHEDULED`, `CONFIRMED`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED`, `NO_SHOW`)
- `reason` (TEXT)

---

## 3. Key Constraints & Business Rules
1. **Unique Double Booking Constraint**: `(doctor_id, appointment_date, time_slot)` must be unique for non-cancelled appointments.
2. **Stock non-negativity**: `quantity` in `inventory` table must have `CHECK (quantity >= 0)`.
3. **Payment balance constraint**: `payment_amount` cannot exceed outstanding balance on `invoices`.
