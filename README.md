# 🏥 Smart Hospital Management & Patient Care Platform

> A production-grade, multi-role Hospital Management System built with Java 21, Spring Boot 3.3, Spring Security, JWT, PostgreSQL, React, Vite, and Tailwind CSS. Designed for B.Tech final-year project demonstration and real-world deployment readiness.

---

## 🎯 Architecture Overview

The system uses a **Modular Monolith Architecture** with clean separation of concerns across a 3-tier backend and a component-driven React single-page application.

```text
smart-hospital-management/
│
├── backend/            # Java 21 + Spring Boot 3 REST API Service
│   ├── src/main/java/  # Controllers, Services, Repositories, Entities, DTOs, Security
│   ├── src/resources/  # application.yml, seed data scripts
│   └── pom.xml         # Maven build file with Spring dependencies
│
├── frontend/           # React + Vite + Tailwind CSS SPA Client
│   ├── src/            # Pages, Components, API Clients, Contexts
│   ├── package.json    # React dependencies (Axios, React Router, Recharts)
│   └── vite.config.js  # Vite server & API proxy config
│
├── docs/               # System documentation & faculty presentation guides
│   ├── architecture.md
│   ├── database-design.md
│   ├── api-documentation.md
│   └── demo-flow.md
│
├── .env.example        # Environment variables template
├── .gitignore          # Root git ignore rule set
└── README.md           # Main documentation
```

---

## 👥 Supported Roles

1. **👨💼 Admin**: User management, doctor/department administration, audit logs, revenue analytics.
2. **👨⚕️ Doctor**: Appointments list, patient medical records, diagnostic entries, prescriptions, lab requests.
3. **👩⚕️ Nurse**: Patient vitals, triage records, ward updates.
4. **🧑💼 Receptionist**: Patient registration, doctor schedule lookup, appointment booking.
5. **🧪 Lab Technician**: Lab request processing, test result entry, report upload/generation.
6. **💊 Pharmacist**: Prescription view, medicine dispensing, batch tracking, stock level & expiry monitoring.
7. **💰 Accountant**: Invoice generation, payment tracking, billing reports.
8. **🧑 Patient**: Profile, appointment history, medical records, prescriptions, lab reports, invoices.

---

## 🚀 Quick Start Guide

### Prerequisites
- **Java JDK 21** or higher
- **Node.js** v18+ & **npm** v9+
- **PostgreSQL** (or automatic H2 fallback mode)

### 1. Backend Setup
```bash
cd backend
# Build the project
mvn clean install

# Run Spring Boot Application
mvn spring-boot:run
```
*Backend runs at `http://localhost:8080`*
*Swagger UI available at `http://localhost:8080/swagger-ui.html`*
*Health Check endpoint: `http://localhost:8080/api/v1/health`*

### 2. Frontend Setup
```bash
cd frontend
# Install dependencies
npm install

# Start Vite Dev Server
npm run dev
```
*Frontend runs at `http://localhost:5173`*

---

## 🧪 Documentation Links
- 📘 [Architecture Details](docs/architecture.md)
- 🗄️ [Database Schema & ER Design](docs/database-design.md)
- 🌐 [REST API Specification](docs/api-documentation.md)
- 🎓 [Faculty Demonstration Flow](docs/demo-flow.md)
