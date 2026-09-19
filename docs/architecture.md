# 🏗️ Smart Hospital Management System — Architecture Specification

## 1. High-Level Architecture Diagram

```text
┌────────────────────────────────────────────────────────────────────────┐
│                      Client Layer (Browser / React SPA)                │
│   ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────┐   │
│   │ Admin Dash    │ │ Doctor Dash   │ │ Reception Dash│ │ Patient UI│   │
│   └───────┬───────┘ └───────┬───────┘ └───────┬───────┘ └─────┬─────┘   │
│           └─────────────────┴───────┬─────────┴───────────────┘         │
└─────────────────────────────────────┼──────────────────────────────────┘
                                      │ HTTP / REST APIs + JWT
                                      ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   Backend Layer (Spring Boot 3.3 / Java 21)             │
│                                                                        │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                     Spring Security & CORS                     │   │
│   │               JWT Token Filter + Role Authorization            │   │
│   └────────────────────────────────┬───────────────────────────────┘   │
│                                    ▼                                   │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                 Controller Layer (REST Endpoints)              │   │
│   │   HealthCheckController | AuthController | PatientController   │   │
│   │   AppointmentController | DoctorController | MedicalRecCtrl    │   │
│   └────────────────────────────────┬───────────────────────────────┘   │
│                                    ▼                                   │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                 Service Layer (Business Logic)                 │   │
│   │   Validation | Conflict Check | Inventory Deduct | Audit Log   │   │
│   └────────────────────────────────┬───────────────────────────────┘   │
│                                    ▼                                   │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                 Repository Layer (Spring Data JPA)             │   │
│   │   UserRepo | PatientRepo | DoctorRepo | AppointmentRepo        │   │
│   └────────────────────────────────┬───────────────────────────────┘   │
└────────────────────────────────────┼───────────────────────────────────┘
                                     │ JDBC Connection
                                     ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        Data Layer (PostgreSQL / H2)                    │
│   Users | Patients | Doctors | Appointments | Records | Prescriptions   │
│   LabTests | Inventory | Invoices | Payments | AuditLogs             │
└────────────────────────────────────────────────────────────────────────┘
```

## 2. Key Architecture Decisions

### 2.1 Modular Monolith
* Chosen over microservices to avoid unnecessary network latency, distributed transaction complexity, and deployment overhead while maintaining clean internal domain boundaries.
* Each domain module (e.g., `appointment`, `pharmacy`, `billing`) is isolated in its own package with clear entity interfaces.

### 2.2 Security Architecture
* **Stateless JWT Authentication**: Tokens contain `userId`, `username`, and `role` claims with HMAC-SHA256 signature.
* **Role-Based Access Control (RBAC)**: Fine-grained `@PreAuthorize("hasRole('DOCTOR')")` annotations on controller routes.
* **Password Security**: Passwords stored using `BCryptPasswordEncoder` with strength factor 10.

### 2.3 Layering Principles
* **Controller Layer**: Handles HTTP requests, parameter validation (`@Valid`), response wrapping (`ApiResponse<T>`), and OpenAPI metadata. No business logic in controllers.
* **Service Layer**: Transactional boundaries (`@Transactional`), business rule evaluation (e.g., double booking check, stock availability check, bill balance check), and audit log emission.
* **Repository Layer**: Extends `JpaRepository<T, ID>` with custom JPQL queries for optimized data fetching.
* **DTO Mapping**: Direct entities are never exposed in REST responses. Custom DTO records and mappers convert entities to safe payload schemas.
